import React, { Component } from 'react';
import { Text, View } from 'react-native'
import AssetTab from './MainTabs/AssetTab';
import WorkOrderTab from './MainTabs/WorkOrderTab';
import ScanTab from './MainTabs/ScanTab';
import MoreTab from './MainTabs/MoreTab';
import {StyleSheet} from "react-native";
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { Ionicons } from '@expo/vector-icons'; // 6.2.2
import { TabNavigator, TabBarBottom } from 'react-navigation'; // 1.0.0-beta.27


const Home= TabNavigator(
  {
    WorkOrders: { screen: WorkOrderTab },
    Assets: { screen: AssetTab },
    Scan: { screen: ScanTab },
    More: { screen: MoreTab},
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Scan') {
          iconName = `ios-camera${focused ? '' : '-outline'}`;
        } else if (routeName === 'More') {
          iconName = `ios-more${focused ? '' : '-outline'}`;
        }
        else if (routeName === 'WorkOrders') {
          iconName = `ios-list${focused ? '' : '-outline'}`;
        }
        else if (routeName === 'Assets') {
          iconName = `ios-locate${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={30} color={tintColor} />;
      }, 
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: 'blue',
      inactiveTintColor: 'gray',
    },
    animationEnabled: true,
    swipeEnabled: true,
     style: {
    backgroundColor: 'blue',
  },
  }
);
export default Home;
