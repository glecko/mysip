import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import IonIcon from 'react-native-vector-icons/Ionicons';
import HomeView from './home';
import HistoryView from './history';
import { View } from 'react-native';

const Tab = createMaterialBottomTabNavigator();

const NavigationComponent = () => (
  <NavigationContainer>
    <Tab.Navigator
      backBehavior="none"
    >
      <Tab.Screen
        name="Home"
        component={HomeView}
        options={{
          tabBarIcon: () => <View><IonIcon size={22} name="beer" color="white" /></View>
        }}
      />
      <Tab.Screen
        name="History"
        component={HistoryView}
        options={{
          tabBarIcon: () => <IonIcon size={22} name="bar-chart" color="white" />
        }}
      />
    </Tab.Navigator>
  </NavigationContainer>
);

export default NavigationComponent;
