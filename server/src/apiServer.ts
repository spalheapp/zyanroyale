import { App, SSLApp, type TemplatedApp } from "uWebSockets.js";
import { version } from "../../package.json";
import { Config, type ConfigType } from "./config";
import type { FindGameBody, FindGameResponse } from "./gameServer";
import { TeamMenu } from "./teamMenu";
import { Logger } from "./utils/logger";
import { cors, forbidden, readPostedJSON, returnJson } from "./utils/serverHelpers";

class Region {
    data: ConfigType["regions"][string];
    playerCount = 0;

    constructor(readonly id: string) {
        this.data = Config.regions[this.id];
    }

    async fetch<Data extends object>(endPoint: string, body: object) {
        const url = `http${this.data.https ? "s" : ""}://${this.data.address}/${endPoint}`;

        return new Promise<Data>((resolve) => {
            fetch(url, {
                body: JSON.stringify({
                    ...body,
                    apiKey: Config.apiKey,
                }),
                method: "post",
                headers: {
                    "Content-type": "application/json",
                },
            })
                .catch(console.error)
                .then((response) => {
                    if (response?.ok) {
                        return response.json();
                    }
                    return [{ err: "Error connecting to region, is it down?" }];
                })
                .then((json) => {
                    resolve(json);
                })
                .catch((error) => {
                    console.error(error);
                    return [{ err: "Error parsing region response JSON" }];
                });
        });
    }
}

interface RegionData {
    playerCount: number;
}

export class ApiServer {
    readonly logger = new Logger("Server");

    teamMenu = new TeamMenu(this);

    regions: Record<string, Region> = {};

    constructor() {
        for (const region in Config.regions) {
            this.regions[region] = new Region(region);
        }
    }

    init(app: TemplatedApp) {
        this.teamMenu.init(app);

        app.get("/api/site_info", (res) => {
            cors(res);
            returnJson(res, this.getSiteInfo());
        });
        app.options("/api/user/profile", (res) => {
            cors(res);
            res.end();
        });
        app.post("/api/user/profile", (res, _req) => {
            cors(res);
            returnJson(res, this.getUserProfile());
        });
    }

    getSiteInfo() {
        const data = {
            modes: Config.modes,
            pops: {} as Record<
                string,
                {
                    playerCount: number;
                    l10n: string;
                }
            >,
            youtube: { name: "", link: "" },
            twitch: [],
            country: "US",
        };

        for (const region in this.regions) {
            data.pops[region] = {
                playerCount: this.regions[region].playerCount,
                l10n: Config.regions[region].l10n,
            };
        }
        return data;
    }

    getUserProfile() {
        return { err: "" };
    }

    updateRegion(regionId: string, regionData: RegionData) {
        const region = this.regions[regionId];
        region.playerCount = regionData.playerCount;
    }

    async findGame(body: FindGameBody): Promise<FindGameResponse> {
        if (body.region in this.regions) {
            return this.regions[body.region].fetch<FindGameResponse>(
                "api/find_game",
                body,
            );
        }
        this.logger.warn("/api/find_game: Invalid region");
        return {
            res: [{ err: "Invalid Region" }],
        };
    }
}

if (process.argv.includes("--api-server")) {
    const server = new ApiServer();

    const app = Config.apiServer.ssl
        ? SSLApp({
              key_file_name: Config.apiServer.ssl.keyFile,
              cert_file_name: Config.apiServer.ssl.certFile,
          })
        : App();

    server.init(app);

    app.options("/api/find_game", (res) => {
        cors(res);
        res.end();
    });
    app.post("/api/find_game", async (res) => {
        cors(res);
        let aborted = false;
        res.onAborted(() => {
            aborted = true;
        });
        readPostedJSON(
            res,
            async (body: FindGameBody) => {
                const data = await server.findGame(body);
                if (aborted) return;
                res.cork(() => {
                    if (aborted) return;
                    returnJson(res, data);
                });
            },
            () => {
                server.logger.warn("/api/find_game: Error retrieving body");
                if (aborted) return;
                returnJson(res, {
                    res: [
                        {
                            err: "Error retriving body",
                        },
                    ],
                });
            },
        );
    });

    app.options("/api/update_region", (res) => {
        cors(res);
        res.end();
    });
    app.post("/api/update_region", (res) => {
        cors(res);
        let aborted = false;
        res.onAborted(() => {
            aborted = true;
        });
        readPostedJSON(
            res,
            (body: {
                apiKey: string;
                regionId: string;
                data: RegionData;
            }) => {
                if (aborted) return;
                if (body.apiKey !== Config.apiKey || !(body.regionId in server.regions)) {
                    forbidden(res);
                    return;
                }
                server.updateRegion(body.regionId, body.data);
            },
            () => {},
        );
    });

    app.listen(Config.apiServer.host, Config.apiServer.port, (): void => {
        server.logger.log(`Resurviv API Server v${version}`);
        server.logger.log(
            `Listening on ${Config.apiServer.host}:${Config.apiServer.port}`,
        );
        server.logger.log("Press Ctrl+C to exit.");
        0;
    });
}
