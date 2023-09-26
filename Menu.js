import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image,  Modal, TextInput } from 'react-native';
import MenuDrawer from 'react-native-side-drawer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

<link rel="stylesheet" type="text/css" href="./node_modules/evil-icons/assets/evil-icons.css"></link>

import TAB1 from "./Tab1";
import TAB2 from "./Tab2";
//-> npm install @react-navigation/bottom-tabs

export default class Menu extends Component {
    constructor(props) {
      super(props);
      this.state = {

      };
    }

  render() {
    const Tab = createBottomTabNavigator();
    return (
      <Tab.Navigator>
      <Tab.Screen name="Inicio" component={TAB1} initialParams={{nombre:this.props.route.params.nombre}}
      options={{
        tabBarLabel: 'Inicio',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
      />
      <Tab.Screen name="Tab2" component={TAB2} />
    </Tab.Navigator>
    );
  }
}

/* const styles = StyleSheet.create({

    }
}) */














