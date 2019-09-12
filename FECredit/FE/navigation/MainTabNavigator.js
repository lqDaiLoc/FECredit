import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import InfoScreen from '../screens/InfoScreen';
import ChiTietVayScreen from '../screens/ChiTietVayScreen';
import KiemTraHoSoScreen from '../screens/KiemTraHoSoScreen';
import testScreem from '../screens/testScreem';


const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Info: InfoScreen,
    ChiTiet: ChiTietVayScreen, 
    KiemTraHoSo: KiemTraHoSoScreen,
    // test: testScreem,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'FE Credit',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

HomeStack.path = '';



const tabNavigator = createBottomTabNavigator({
  HomeStack,
  
});

tabNavigator.path = '';

export default tabNavigator;
