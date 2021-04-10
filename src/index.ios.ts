import { NativeModules } from 'react-native';

import type { RNUserdefaultsType } from './types';

const RNUserdefaults: RNUserdefaultsType = {
  set: (value, key) => {
    NativeModules.RNUserdefaults.set(value, key);
  },
  setWithSuite: (value, key, suite) => {
    NativeModules.RNUserdefaults.set(value, key, suite);
  },
  get: (key) => {
    return NativeModules.RNUserdefaults.get(key);
  },
  getWithSuite: (key, suite) => {
    return NativeModules.RNUserdefaults.get(key, suite);
  },
};

export default RNUserdefaults as RNUserdefaultsType;
