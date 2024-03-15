export const Config = {
  regions: {
    dev: { name: "Mata Mata", address: "zyanroyale.online:443", https: true },
  },
  defaultRegion: "dev",
    mode: "christmas"
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
