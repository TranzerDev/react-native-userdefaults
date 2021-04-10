import * as React from 'react';
import { StyleSheet, View, Button } from 'react-native';
// @ts-ignore
import RNUserdefaults from 'react-native-userdefaults';

export default function App() {
  return (
    <View style={styles.container}>
      <Button
        title={'Set value'}
        onPress={() => {
          const value = JSON.stringify({ super: 'object3' });
          RNUserdefaults.set(value, 'save.new.defaults');
        }}
      />
      <Button
        title={'Get value'}
        onPress={async () => {
          try {
            const value = await RNUserdefaults.get('save.unknown.defaults');
            console.log(`value`, value);
          } catch (error) {
            console.warn(`error`, error);
          }
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
