/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import NavigationComponent from './views/navigation';

const App: () => React$Node = () => (
  <>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationComponent />
    </SafeAreaView>
  </>
);

export default App;
