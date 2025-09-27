import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SplashScreen from '../SplashScreen'
import DrawerNavigation from './DrawerNavigation'
import LoginScreen from '../authScreens/LoginScreen'
import SignupScreen from '../authScreens/SignupScreen'

const Stack = createNativeStackNavigator()

export default function StackNavigation() {

    return (
        <Stack.Navigator initialRouteName='SplashScreen'
        screenOptions={{
            headerShown: false
        }}
        >
            <Stack.Screen name='SplashScreen' component={SplashScreen} />
            <Stack.Screen name='LoginScreen' component={LoginScreen} />
            <Stack.Screen name='SignupScreen' component={SignupScreen} />
            <Stack.Screen name='DrawerScreen' component={DrawerNavigation} />
        </Stack.Navigator>
    )
}