import React from 'react';
import { StyleSheet, Text, SafeView, TextInput } from 'react-native';
import Home from './app/components/Home/Home.component'
import About from './app/components/About/'

import {connect} from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();


const AppContainer = () => {
    return (
        <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="About" component={About} />
        </Stack.Navigator>

        </NavigationContainer>
    );
};

const mapStateToProps = (state) => ({
    state
})

const mapDispatchToProps = (dispatch) => ({
    dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
