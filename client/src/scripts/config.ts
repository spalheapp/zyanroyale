export const Config = {
    regions: {
        default: { name: "Mata Mata", address: "146.19.9.234", https: true },
    },
    defaultRegion: "default",
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
