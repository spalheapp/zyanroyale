export const Config = {
    regions: {
        dev: { name: "Batalha Solo", address: "127.0.0.1:8000", https: false },
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
