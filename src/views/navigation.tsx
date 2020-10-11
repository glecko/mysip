import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import IonIcon from 'react-native-vector-icons/Ionicons';
import HomeView from './home';
import HistoryView from './history';

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
          tabBarIcon: () => <IonIcon size={20} name="beer" color="white" />
        }}
      />
      <Tab.Screen
        name="History"
        component={HistoryView}
        options={{
          tabBarIcon: () => <IonIcon size={20} name="bar-chart" color="white" />
        }}
      />
    </Tab.Navigator>
  </NavigationContainer>
);

export default NavigationComponent;
