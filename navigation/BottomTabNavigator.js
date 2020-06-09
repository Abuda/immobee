import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import constants from '../helpers/constants';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({
    headerShown: false,
    headerTitle: getHeaderTitle(route),
  });

  return (
    <BottomTab.Navigator
      initialRouteName={INITIAL_ROUTE_NAME}
      tabBarOptions={{
        // activeBackgroundColor: constants.primaryColor,
        // inactiveBackgroundColor: constants.primaryColor,
        // activeTintColor: constants.primaryColor,
        // inactiveTintColor: constants.primaryColor,
        showLabel: false,
        style: {
          // backgroundColor: constants.grayColor1,
        },
        tabStyle: {},
        keyboardHidesTabBar: true,
      }}
    >
      <BottomTab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name='home' />
          ),
        }}
      />
      <BottomTab.Screen
        name='Favorites'
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name='star' />
          ),
        }}
      />
      <BottomTab.Screen
        name='Links'
        component={LinksScreen}
        options={{
          title: 'Resources',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name='user' />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName =
    route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'How to get started';
    case 'Links':
      return 'Links to learn more';
  }
}
