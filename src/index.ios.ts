import { NativeModules } from 'react-native';

import type { RNUserdefaultsType } from './types';

const { RNUserdefaults } = NativeModules;

export default RNUserdefaults as RNUserdefaultsType;