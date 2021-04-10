import type { RNUserdefaultsType } from './types';

const ultimateThrower = (): never => {
  throw 'not implemented';
};

const RNUserdefaults: RNUserdefaultsType = {
  set: (_value, _key) => ultimateThrower,
  setWithSuite: (_value, _key, _suite) => ultimateThrower,
  get: async (_key) => {
    ultimateThrower();
    return undefined;
  },
  getWithSuite: async (_key, _suite) => {
    ultimateThrower();
    return undefined;
  },
};

export default RNUserdefaults;
