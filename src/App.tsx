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
import { Provider as PaperProvider } from 'react-native-paper';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import IonIcon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import NavigationComponent from './views/navigation';

FontAwesomeIcon.loadFont();
IonIcon.loadFont();
MaterialCommunityIcon.loadFont();

const App: () => React$Node = () => (
  <PaperProvider>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationComponent />
    </SafeAreaView>
  </PaperProvider>
);

export default App;
