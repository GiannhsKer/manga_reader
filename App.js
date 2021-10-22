import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/Home'
import Pages from './screens/Pages'
import Chapters from './screens/Chapters'
// import Sandbox from './screens/sandbox.js'

const Stack = createNativeStackNavigator();

const App = () => {

    return (
        // <NavigationContainer>
        //     <Stack.Navigator initialRouteName="Home">
        //         <Stack.Screen name="Home" component={Home} />
        //         <Stack.Screen name="Chapters" component={Chapters} />
        //     </Stack.Navigator>
        // </NavigationContainer>
        <Pages />
    );
}

export default App;