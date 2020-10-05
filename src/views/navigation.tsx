import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MainView from './main';

const Tab = createMaterialTopTabNavigator();

const NavigationComponent = () => (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={MainView}
      />
      <Tab.Screen name="Screen 2" component={MainView} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default NavigationComponent;
