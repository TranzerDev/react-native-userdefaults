import { NativeModules } from 'react-native';

import type { RNUserdefaultsType } from './types';

const RNUserdefaults: RNUserdefaultsType = {
  set: (value, key) => {
    NativeModules.RNUserdefaults.set(value, key);
  },
  setFromSuite: (value, key, suite) => {
    NativeModules.RNUserdefaults.set(value, key, suite);
  },
  get: (key) => {
    return NativeModules.RNUserdefaults.get(key);
  },
  getFromSuite: (key, suite) => {
    return NativeModules.RNUserdefaults.get(key, suite);
  },
  remove: (key) => {
    NativeModules.RNUserdefaults.remove(key);
  },
  removeFromSuite: (key, suite) => {
    NativeModules.RNUserdefaults.remove(key, suite);
  },
};

export const { set } = RNUserdefaults;
export const { setFromSuite } = RNUserdefaults;
export const { get } = RNUserdefaults;
export const { getFromSuite } = RNUserdefaults;
export const { remove } = RNUserdefaults;
export const { removeFromSuite } = RNUserdefaults;

export default RNUserdefaults;
