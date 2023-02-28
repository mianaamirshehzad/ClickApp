import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Forgot from '../screens/ForgotPassword';
import TaskScreen from '../screens/TaskScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='Login'
                    component={Login}
                    options = {{headerShown: false}} />
                    <Stack.Screen
                    name='Signup'
                    component={Signup}
                    options = {{headerShown: false}} />
                    <Stack.Screen
                    name='Forgot'
                    component={Forgot}
                    options = {{headerShown: false}} />
                    <Stack.Screen
                    name='TaskScreen'
                    component={TaskScreen}
                    options = {{headerShown: false}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;