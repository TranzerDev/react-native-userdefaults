import { NativeModules } from 'react-native';

type UserdefaultsType = {
  multiply(a: number, b: number): Promise<number>;
};

const { Userdefaults } = NativeModules;

export default Userdefaults as UserdefaultsType;