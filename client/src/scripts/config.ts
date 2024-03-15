export const Config = {
  regions: {
    dev: { name: "Mata Mata", address: "zyanroyale.online:443", https: true },
    dev1v1: { name: "Local Server 1v1", address: "zyanroyale.online:444", https: false },
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
