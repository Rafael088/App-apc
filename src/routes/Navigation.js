import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useContext } from 'react';

import { AuthContext } from "../hooks/AuthContext";
//screens
import Login from '../page/Login';
import Home from '../page/Home';
import Orders from '../page/Orders';
import Options from '../page/Options';
import SelectOrder from '../page/SelectOrder';
const HomeStackNavigator = createNativeStackNavigator();

function MyStack() {
    
    const {selectOrder } = useContext(AuthContext)

    return(
        <HomeStackNavigator.Navigator initialRouteName='LoginScreen'>
            <HomeStackNavigator.Screen
                name='LoginScreen'
                component={Login}
                options={{
                    headerShown: false,
                }}
            />
            <HomeStackNavigator.Screen
                name='HomeScreen'
                component={Home}
                options={{
                    headerShown: false,
                    animationEnabled: false
                }}
            />
            <HomeStackNavigator.Screen
                name='OrderScreen'
                component={Orders}
                options={{
                    headerShown: false,
                    animationEnabled: false
                }}
            />
            <HomeStackNavigator.Screen
                name='OptionsScreen'
                component={Options}
                options={{
                    headerShown: false,
                    animationEnabled: false
                }}
            />
            <HomeStackNavigator.Screen
                name='SelectOrderScreen'
                component={SelectOrder}
                options={{
                    headerTitle: `Mesa ${selectOrder.numeroMesa}`,
                    headerShown: true,
                    AnimationEffect: 'pop',
                }}
            />
        </HomeStackNavigator.Navigator>
    );
}
export default function Navigation() {
    return(
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    );
} ;