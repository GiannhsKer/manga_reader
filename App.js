import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/Home'
import Display from './screens/Display'
import Chapters from './screens/Chapters'

// import Sandbox from './screens/sandbox.js'

const Stack = createNativeStackNavigator();

const App = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Chapters" component={Chapters} />
                <Stack.Screen name="Display" component={Display} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;