import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Modal, TextInput } from 'react-native';
import MenuDrawer from 'react-native-side-drawer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import EvilIcons from 'react-native-vector-icons/EvilIcons'; // Cambiamos la importación
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import TAB1 from "./Tab1";
import TAB2 from "./Tab2";
import TAB3 from "./Tab3";

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
          name="HandyMan"
          component={TAB1}
          initialParams={{ nombre: this.props.route.params.nombre }}
          //Material Icons
          /* options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={"red"} size={size} />
            ),
          }}  */

          //Evil Icons
           options={{
            tabBarLabel: 'Inicio',
            tabBarIcon: ({ color, size }) => (
              <EvilIcons name="user" color={"black"} size={45} /> // Cambiamos a EvilIcons
            ),
          }} 
        />
        <Tab.Screen
          name="Videos"
          component={TAB2}
          initialParams={{ nombre: this.props.route.params.nombre }}
          //Material Icons
          /* options={{
            tabBarLabel: 'Tab2',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="alert-box" color={"red"} size={size} />
            ),
          }}  */

          //Evil Icons
          options={{
            tabBarLabel: 'Videos',
            tabBarIcon: ({ color, size }) => (
              <EvilIcons name="sc-youtube" color={"black"} size={45} /> // Cambiamos a otro icono de EvilIcons
            ),
          }} 
        />
        <Tab.Screen
          name="Mapa"
          component={TAB3}
          initialParams={{ nombre: this.props.route.params.nombre }}
          //Material Icons
          /* options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="map-marker" color={"red"} size={size} />
            ),
          }}  */

          //Evil Icons
          options={{
            tabBarLabel: 'Mapa',
            tabBarIcon: ({ color, size }) => (
              <EvilIcons name="location" color={"black"} size={35} /> // Cambiamos a EvilIcons
            ),
          }} 
        />
      </Tab.Navigator>
    );
  }
}
