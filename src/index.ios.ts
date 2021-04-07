import { NativeModules } from 'react-native';

type RNUserdefaultsType = {
  multiply(a: number, b: number): Promise<number>;
};

const { RNUserdefaults } = NativeModules;

export default RNUserdefaults as RNUserdefaultsType;