import type { RNUserdefaultsType } from './types';

const ultimateThrower = (): never => {
  throw 'not implemented';
};

const RNUserdefaults: RNUserdefaultsType = {
  set: (_value, _key) => ultimateThrower,
  setFromSuite: (_value, _key, _suite) => ultimateThrower,
  get: async (_key) => {
    ultimateThrower();
    return undefined;
  },
  getFromSuite: async (_key, _suite) => {
    ultimateThrower();
    return undefined;
  },
  remove: (_key) => ultimateThrower,
  removeFromSuite: (_key, _suite) => ultimateThrower,
};

export default RNUserdefaults;
