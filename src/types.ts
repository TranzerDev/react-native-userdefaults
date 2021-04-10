// types.ts

export type RNUserdefaultsType = {
  set: (value: string, key: string) => void;
  setWithSuite: (value: string, key: string, suite: string) => void;
  get: (key: string) => Promise<string | undefined>;
  getWithSuite: (key: string, suite: string) => Promise<string | undefined>;
};
