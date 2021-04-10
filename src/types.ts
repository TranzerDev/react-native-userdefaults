// types.ts

export type RNUserdefaultsType = {
  set: (value: string, key: string) => void;
  setFromSuite: (value: string, key: string, suite: string) => void;
  get: (key: string) => Promise<string | undefined>;
  getFromSuite: (key: string, suite: string) => Promise<string | undefined>;
  remove: (key: string) => void;
  removeFromSuite: (key: string, suite: string) => void;
};
