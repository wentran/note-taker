import { createStackNavigator } from '@react-navigation/stack';
import React, from 'react';
import Home from '../components/Home/Home.component';

const Stack = createStackNavigator();

const StackNavs = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    )
};

