/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {Fragment} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
// @ts-ignore
import openURLInBrowser from 'react-native/Libraries/Core/Devtools/openURLInBrowser';
import {Colors} from 'react-native/Libraries/NewAppScreen';
// @ts-ignore
import BGImage from 'react-native/Libraries/NewAppScreen/components/logo.png';
// @ts-ignore
import RNUserdefaults from '@tranzerdev/react-native-user-defaults';

const Header = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <ImageBackground
      source={BGImage}
      style={[
        styles.background,
        {
          backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
        },
      ]}
      imageStyle={styles.logo}>
      <Text
        style={[
          styles.text,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        Welcome to
        {'\n'}
        React Native User Defaults
      </Text>
    </ImageBackground>
  );
};

const links = [
  {
    id: 1,
    title: 'Set',
    link:
      'https://github.com/TranzerDev/react-native-userdefaults#set-value-in-user-defaults',
    description: 'Explains how to set a value',
  },
  {
    id: 2,
    title: 'Get',
    link:
      'https://github.com/TranzerDev/react-native-userdefaults#get-value-in-user-defaults',
    description: 'Covers how to get a specific value',
  },
  {
    id: 3,
    title: 'Remove',
    link:
      'https://github.com/TranzerDev/react-native-userdefaults#remove-value-in-user-defaults',
    description: 'How to remove a value',
  },
  {
    id: 4,
    title: 'Contribute',
    link: 'https://github.com/TranzerDev/react-native-userdefaults',
    description: 'Help us get better!',
  },
];

const LearnMoreLinks = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.container}>
      {links.map(({id, title, link, description}) => (
        <Fragment key={id}>
          <View
            style={[
              styles.separator,
              {
                backgroundColor: isDarkMode ? Colors.dark : Colors.light,
              },
            ]}
          />
          <TouchableOpacity
            accessibilityRole="button"
            onPress={() => openURLInBrowser(link)}
            style={styles.linkContainer}>
            <Text style={styles.link}>{title}</Text>
            <Text
              style={[
                styles.description,
                {
                  color: isDarkMode ? Colors.lighter : Colors.dark,
                },
              ]}>
              {description}
            </Text>
          </TouchableOpacity>
        </Fragment>
      ))}
    </View>
  );
};

const Section: React.FC<{
  title: string;
  onPress: () => void;
}> = ({children, title, onPress}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <TouchableOpacity style={styles.sectionContainer} onPress={onPress}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const setValue = () => {
    const value = JSON.stringify({super: 'object3'});
    RNUserdefaults.set(value, 'save.new.defaults');
  };

  const getValue = async () => {
    try {
      const value = await RNUserdefaults.get('save.new.defaults');
      if (value !== undefined) {
        const {super: keyer} = JSON.parse(value) as {super: string};
        console.log(`super`, keyer);
      }
    } catch (error) {
      console.warn(`error`, error);
    }
  };

  const removeValue = () => {
    RNUserdefaults.remove('save.new.defaults');
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Set" onPress={setValue}>
            Press here to <Text style={styles.highlight}>set</Text> a value
          </Section>
          <Section title="Get" onPress={getValue}>
            Press here to <Text style={styles.highlight}>get</Text> a value
          </Section>
          <Section title="Remove" onPress={removeValue}>
            Press here to <Text style={styles.highlight}>set</Text> a value
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  background: {
    paddingBottom: 40,
    paddingTop: 96,
    paddingHorizontal: 32,
  },
  logo: {
    opacity: 0.2,
    overflow: 'visible',
    resizeMode: 'cover',
    marginLeft: -128,
    marginBottom: -192,
  },
  text: {
    fontSize: 40,
    fontWeight: '700',
    textAlign: 'center',
  },
  container: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  linkContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  link: {
    flex: 2,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.primary,
  },
  description: {
    flex: 3,
    paddingVertical: 16,
    fontWeight: '400',
    fontSize: 18,
  },
  separator: {
    height: StyleSheet.hairlineWidth,
  },
});

export default App;
