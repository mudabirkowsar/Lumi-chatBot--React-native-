import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeScreen from '../home/HomeScreen';
import HistoryScreen from '../home/HistoryScreen';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator>
        <Drawer.Screen name='HomeScreen' component={HomeScreen} />
        <Drawer.Screen name='HistoryScreen' component={HistoryScreen} />
    </Drawer.Navigator>
  )
}