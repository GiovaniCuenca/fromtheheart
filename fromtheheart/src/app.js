import React from 'react'
import { View, Text } from 'react-native'
import { Home, HomeTwo } from 'modules/core'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from 'styles'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'

const Tab = createStackNavigator();
const Stack = createStackNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <MaterialBottomTabs.Navigator barStyle={{ backgroundColor: colors.greenDarken }} >
                <MaterialBottomTabs.Screen name="Home" component={Home} options={{
                    tabBarIcon: () => (<Icon name="home" size={20} color="#FFF" />)
                }}/>
                <MaterialBottomTabs.Screen name="HomeTwo" component={HomeTwo} options={{
                    tabBarIcon: () => (<Icon name="dashboard" size={20} color="#FFF" />)
                }}/>
            </MaterialBottomTabs.Navigator>
        </NavigationContainer>
    )
}

export { App }