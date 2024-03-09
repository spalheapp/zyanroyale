export const Config = {
    regions: {
        dev: { name: "Mata Mata", address: "146.19.9.234", https: true },
        no: { name: "Campeonato", address: "162.159.24.201", https: true },
        pt: { name: "Vai com tudo", address: "31.170.166.231", https: true }
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
