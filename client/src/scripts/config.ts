export const Config = {
    regions: {
        dev: { name: "Batalha Solo", address: "146.19.9.234:8000", https: false },
        ev: { name: "Campeonato", address: "146.19.9.234:8000", https: true },
    },
    defaultRegion: "dev",
    mode: "normal"
} satisfies ConfigType as ConfigType;

export interface ConfigType {
    readonly regions: Record<string, {
        readonly name: string
        readonly address: string
        readonly https: boolean
    }>
    readonly defaultRegion: string
    readonly mode: string
}
