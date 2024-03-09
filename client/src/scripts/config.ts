export const Config = {
  regions: {
    dev: { name: "Mata Mata", address: "zyanroyale.online", https: false },
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
