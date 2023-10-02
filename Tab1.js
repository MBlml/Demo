import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Modal, TextInput, FlatList } from 'react-native';
import MenuDrawer from 'react-native-side-drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default class Tab1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      dataSource: [],
    };
  }

  toggleOpen = () => {
    this.setState({ open: !this.state.open });
  };

  drawerContent = () => {
    return (
      <View style={styles.animatedBox}>
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>
          Bienvenido: {this.props.route.params.nombre}
        </Text>
        <TouchableOpacity onPress={this.toggleOpen} style={styles.txtClose}>
          <Text style={styles.txtClose}>Close</Text>
        </TouchableOpacity>
      </View>
    );
  };

  componentDidMount() {
    var xhttp = new XMLHttpRequest();
    _this = this;
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
        console.log(xhttp.responseText);
        var Temp = JSON.parse(xhttp.responseText);
        _this.setState({ dataSource: Temp });
      }
    };
    xhttp.open(
      'GET',
      'https://dcc2.000webhostapp.com/2023B/datos.json',
      true
    );
    xhttp.send();
  }

  // Pantalla de Tab1
  render() {
    return (
      <View style={styles.container}>
        <MenuDrawer
          open={this.state.open}
          position={'left'}
          drawerContent={this.drawerContent()}
          drawerPercentage={45}
          animationTime={250}
          overlay={true}
          opacity={0.4}
        >
          <TouchableOpacity onPress={this.toggleOpen} style={styles.body}>
            <Image style={styles.imgMenu} source={require('./imagenes/drawer.png')} />
          </TouchableOpacity>
        </MenuDrawer>

        <View style={{ marginTop: 20}}>
          <Text style={{ color: 'black', fontSize: 30 }}>Lista de Trabajadores</Text>
          <FlatList
            data={this.state.dataSource}
            renderItem={({ item }) => (
              <View>
                <Text style={{ color: 'black', marginTop: 15 }}>Nombre: {item.Nombre}</Text>
                <Text style={{ color: 'black', marginTop: 15 }}>Profesion: {item.Profesion}</Text>
                <Text style={{ color: 'black', marginTop: 15 }}>Telefono: {item.Telefono}</Text>
                <View>
                  <Image
                    style={{ width: 150, height: 150 }}
                    source={{ uri: item.Imagen }}
                  />
                </View>
                <View style={{ width: 300, height: 3, backgroundColor: 'gray', marginTop: 20 }}></View>
              </View>
            )}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0,
    zIndex: 0,
    color: 'white',
  },
  animatedBox: {
    backgroundColor: 'black',
    color: 'red',
    padding: 10,
    marginTop: 65,
    height: 700,
    width: 150,
  },
  txtClose: {
    marginTop: 1,
    marginTop: 220,
    color: 'red',
    fontWeight: 'bold',
  },
  body: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgMenu: {
    marginLeft: 360,
    marginTop: 40,
    height: 30,
    width: 30,
  },
});
