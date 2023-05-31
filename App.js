import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import {Produtos} from './src/components/Produtos'
import { Design } from './src/components/Design';
import { Custos } from './src/components/Custos';

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name='Design' component={Design}
      options={{
        tabBarLabel: 'Design',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="format-paint" size={24} color="royalblue" />
        ),
      }}
      />
      <Tab.Screen name='Produtos' component={Produtos}
      options={{
        tabBarLabel: 'Produtos',
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="hardware" size={24} color="royalblue" />
        ),
      }}
      />
     <Tab.Screen name='Custos' component={Custos}
     options={{
      tabBarLabel: 'Custos',
      tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="hand-coin" size={24} color="royalblue" />      ),
    }}
     />
    </Tab.Navigator>
  </NavigationContainer>
  );
}

