# react-native-user-defaults

An wrapper for iOS UserDefaults

- [Installation](#Installation)
- [Usage](#Usage)
- [License](./LICENSE)

## Installation

### Install the library

Using either Yarn:

```bash
yarn add @tranzerdev/react-native-user-defaults
```

Or npm:

```bash
npm install @tranzerdev/react-native-user-defaults
```

### Link

- **React Native 0.60+**

[CLI autolink feature](https://github.com/react-native-community/cli/blob/master/docs/autolinking.md) links the module while building the app.

_Note_ For `iOS` using `cocoapods`, run:

```bash
$ cd ios && pod install
```

- **React Native <= 0.59**

The following steps are only necessary if you are working with a version of React Native lower than 0.60:

```bash
$ react-native link @tranzerdev/react-native-user-defaults
```

#### iOS

1. In Xcode in the project navigator, right click `Libraries` > `Add Files to [your project's name]`
2. Go to `node_modules` > `@tranzerdev/react-native-user-defaults` and add `RNUserdefaults.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNUserdefaults.a` to your project's `BuildPhases` > `Link Binary With Libraries`
4. Run your project (`cmd+R`)

#### Android

No configuration needed

## Usage

Import RNUserdefaults from `@tranzerdev/react-native-user-defaults`:

```javascript
import RNUserdefaults from '@tranzerdev/react-native-user-defaults';
```

### Set value in user defaults

```javascript
// This is the value you want to save
// Make sure the value is an string
const value = JSON.stringify({ hallo: 'world' });
// The key to get or remove the value
const key = 'key-for-value';
// To set the value in standard UserDefaults
RNUserdefaults.set(value, key);
// The UserDefaults suite indetifier
const suite = 'group.example.app';
// iOS only: To set the value in a self defined UserDefaults suite.
RNUserdefaults.setFromSuite(value, key, suite);
```

### Get value in user defaults

```javascript
// The key to get or remove the value
const key = 'key-for-value';
// To get the value in standard UserDefaults
const value = await RNUserdefaults.get(key);
// The UserDefaults suite indetifier
const suite = 'group.example.app';
//iOS only: To get the value in a self defined UserDefaults suite
const value = await RNUserdefaults.getFromSuite(key, suite);
```

### Remove value in user defaults

```javascript
// The key to get or remove the value
const key = 'key-for-value';
// To remove the value in standard UserDefaults
RNUserdefaults.remove(key);
// The UserDefaults suite indetifier
const suite = 'group.example.app';
// iOS only: To remove the value in a self defined UserDefaults suite
RNUserdefaults.removeFromSuite(key, suite);
```
