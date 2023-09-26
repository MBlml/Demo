import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Modal, TextInput } from 'react-native';
import MenuDrawer from 'react-native-side-drawer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import EvilIcons from 'react-native-vector-icons/EvilIcons'; // Cambiamos la importación

import TAB1 from "./Tab1";
import TAB2 from "./Tab2";

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const Tab = createBottomTabNavigator();
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Inicio"
          component={TAB1}
          initialParams={{ nombre: this.props.route.params.nombre }}
          options={{
            tabBarLabel: 'Inicio',
            tabBarIcon: ({ color, size }) => (
              <EvilIcons name="sc-odnoklassniki" color={"black"} size={50} /> // Cambiamos a EvilIcons
            ),
          }}
        />
        <Tab.Screen
          name="Tab2"
          component={TAB2}
          options={{
            tabBarLabel: 'Video',
            tabBarIcon: ({ color, size }) => (
              <EvilIcons name="sc-youtube" color={"black"} size={50} /> // Cambiamos a otro icono de EvilIcons
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
}
