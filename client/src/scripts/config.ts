export const Config = {
  regions: {
    dev: { name: "Mata Mata", address: "zyanroyale.online", https: true },
    kj: { name: "Local Server", address: "127.0.0.1:63333", https: false },
    sg: { name: "Singapore", address: "suroi15.dafox.box.ca", https: true },
    nj: { name: "New Jersey", address: "islandrain.compositr.dev", https: true }
  },
  defaultRegion: "dev",
  mode: "normal",
} satisfies ConfigType as ConfigType;

export interface ConfigType {
  readonly regions: Record<
    string,
    {
      readonly name: string;
      readonly address: string;
      readonly https: boolean;
    }
  >;
  readonly defaultRegion: string;
  readonly mode: string;
}
