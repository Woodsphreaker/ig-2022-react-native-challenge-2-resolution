import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack'

import { Home } from '../screens/Home'
import { RegisterLoginData } from '../screens/RegisterLoginData'

export type RootNavigationProps = {
  Home: undefined
  RegisterLoginData: undefined
}

export type NavigationProps = StackNavigationProp<RootNavigationProps>

const { Navigator, Screen } = createStackNavigator<RootNavigationProps>()

export function AppRoutes() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Screen name="Home" component={Home} />
        <Screen name="RegisterLoginData" component={RegisterLoginData} />
      </Navigator>
    </NavigationContainer>
  )
}
