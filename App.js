import React, {useState} from 'react';

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
  // TODO: App & Dev setup
  // TODO: Make this an array of beers (and pass to flatlist)
  // TODO: Make this a reducer
  // TODO: Make this global context & use hooks
  // TODO: Persist this on the device (persists across refreshes and restarts)
  const [breweryName, setBreweryName] = useState('');
  const [beerName, setBeerName] = useState('');

  console.log('from App.js' + breweryName);

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
        <Tab.Screen name="Add Beer">
          {props => (
            <Screens.AddBeerScreen
              {...props}
              setBreweryName={setBreweryName}
              setBeerName={setBeerName}
              breweryName={breweryName}
              beerName={beerName}
            />
          )}
        </Tab.Screen>
        <Tab.Screen name="My Beer">
          {props => (
            <Screens.MyBeerScreen
              {...props}
              breweryName={breweryName}
              beerName={beerName}
            />
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
