import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';

import Screens from './src/screens';
import {
  screenBackgroundColor,
  gray,
  lightPink,
  brandColor,
} from './src/style/colors';
import {navigationStyles} from './src/style/typography';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerStyle: {
            backgroundColor: screenBackgroundColor,
          },
          headerTitleStyle: {
            color: brandColor,
            fontWeight: navigationStyles.fontWeight,
            fontSize: navigationStyles.headerFontSize,
          },
          tabBarStyle: {backgroundColor: screenBackgroundColor},
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home-outline';
            }
            if (route.name === 'Add Beer') {
              iconName = 'add-outline';
            }
            if (route.name === 'My Beer') {
              iconName = 'beer-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: lightPink,
          tabBarInactiveTintColor: gray,
        })}>
        <Tab.Screen name="Home" component={Screens.HomeScreen} />
        <Tab.Screen name="Add Beer" component={Screens.AddBeerScreen} />
        <Tab.Screen name="My Beer" component={Screens.MyBeerScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
