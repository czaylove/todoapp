import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from '../Main/index';
import Add from '../Main/add';

const NavStack = createStackNavigator(
  {
    Home: Home,
    Add: Add,
  },
  {
    initialRouteName: 'Home',
    // headerMode: 'none',
  },
);

const App = createAppContainer(NavStack);

export default App;
