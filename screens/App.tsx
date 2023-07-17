import React from 'react'
//import { View, Text } from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from './Splash'
import Regis from './Regis';
import SplashEasy from './SplashEasy';
import SplashFast from './SplashFast';
import Login from './Login';
import Home from './Home';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name= "Splash" component={Splash} options={{headerShown: false}}
        />
        <Stack.Screen name= "SplashEasy" component={SplashEasy} options={{headerShown: false}}
        />
        <Stack.Screen name= "SplashFast" component={SplashFast} options={{headerShown: false}}
        />
        <Stack.Screen name= "Regis" component={Regis} options={{headerShown: false}}
        />
        <Stack.Screen name= "Login" component={Login} options={{headerShown: false}}
        />
        <Stack.Screen name= "Home" component={Home} options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App