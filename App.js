import React from 'react'
import StackNavigation from './components/screens/navigation/StackNavigation'
import { NavigationContainer } from '@react-navigation/native'

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  )
}