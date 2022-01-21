import type { RNUserdefaultsType } from './types';
import { NativeModules } from 'react-native';

const ultimateThrower = (): never => {
  throw 'not implemented';
};

const RNUserdefaults: RNUserdefaultsType = {
  set: (_value, _key) => {
    NativeModules.Userdefaults.set(_value, _key);
  },
  setFromSuite: (_value, _key, _suite) => ultimateThrower,
  get: (key) => {
    return NativeModules.Userdefaults.get(key);
  },
  getFromSuite: async (_key, _suite) => {
    ultimateThrower();
    return undefined;
  },
  remove: (key) => {
    return NativeModules.Userdefaults.remove(key);
  },
  removeFromSuite: (_key, _suite) => ultimateThrower,
};

export const { set } = RNUserdefaults;
export const { setFromSuite } = RNUserdefaults;
export const { get } = RNUserdefaults;
export const { getFromSuite } = RNUserdefaults;
export const { remove } = RNUserdefaults;
export const { removeFromSuite } = RNUserdefaults;

export default RNUserdefaults;
