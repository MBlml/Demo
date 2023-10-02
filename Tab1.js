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

        <View style={{ marginTop: 20 }}>
        <Text style={{ color: 'black', fontSize: 30 }}>Lista de Trabajadores</Text>
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) => (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
              <View>
                <Image
                  style={{
                    width: 150,
                    height: 150,
                    //borderColor: 'black',
                    //borderWidth: 1,
                    //borderRadius: 20,
                  }}
                  //source={{ uri: item.Imagen }} //Imagen del profesor
                  source={{ uri: 'https://assets.stickpng.com/thumbs/585e4beacb11b227491c3399.png' }}
                />
              </View>
              <View style={{ marginLeft: 20 }}>
                <Text style={{ color: 'black' }}>{item.Nombre}</Text>
                <Text style={{ color: 'black' }}>{item.Profesion}</Text>
                <Text style={{ color: 'black' }}>{item.Telefono}</Text>
              </View>
            </View>
          )}
          ItemSeparatorComponent={() => (
            <View style={{ height: 1, backgroundColor: 'gray', marginVertical: 10 }} />
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
