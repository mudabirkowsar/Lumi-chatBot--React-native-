import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SplashScreen from '../SplashScreen'

const Stack = createNativeStackNavigator()
export default function StackNavigation() {
  return (
    <Stack.Navigator>
        <Stack.Screen name='SplashScreen' component={SplashScreen} />
    </Stack.Navigator>
  )
}