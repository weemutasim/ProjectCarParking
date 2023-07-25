import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

//Screen
import Splash from '../Splash';
import SplashEasy from '../SplashEasy';
import SplashFast from '../SplashFast';
import Regis from '../Regis';
import Login from '../Login';

//Operation_Screen
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import ProfileScreen from './ProfileScreen';
import SettingsScreen from './SettingsScreen';

const homeName = "Home";
const detailsName = "Details";
const profileName = "Profile";
const settingsName = "Settings";

function Operation_Screen() {
  return (
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarInactiveTintColor: 'black',
          tabBarLabelStyle: { paddingBottom: 10, fontSize: 10 },
          tabBarStyle: { padding: 10, height: 70},
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === detailsName) {
              iconName = focused ? 'list' : 'list-outline';

            } else if (rn === profileName) {
              iconName = focused ? 'people' : 'people-outline'
            } 
            else if (rn === settingsName) {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}>
        <Tab.Screen name={homeName} component={HomeScreen} options={{headerShown: false}} />
        <Tab.Screen name={detailsName} component={DetailsScreen} options={{headerShown: false}} />
        <Tab.Screen name={profileName} component={ProfileScreen} options={{headerShown: false}} />
        <Tab.Screen name={settingsName} component={SettingsScreen} options={{headerShown: false}} />

      </Tab.Navigator>
  );
}

function MainContainer(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
       <Stack.Screen name= "Splash" component={Splash} options={{headerShown: false}}/>
        <Stack.Screen name= "SplashEasy" component={SplashEasy} options={{headerShown: false}}/>
        <Stack.Screen name= "SplashFast" component={SplashFast} options={{headerShown: false}}/>
        <Stack.Screen name= "Regis" component={Regis} options={{headerShown: false}}/>
        <Stack.Screen name= "Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name= "Operation_Screen" component={Operation_Screen} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;