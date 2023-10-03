import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Modal, TextInput, FlatList } from 'react-native';
import MenuDrawer from 'react-native-side-drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContext } from '@react-navigation/native';

export default class Tab1 extends Component {
  static contextType = NavigationContext;
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
          <Text style={{marginTop: 500, color: 'red', fontWeight: 'bold', fontSize: 20 }}>Close</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={cerrarSesion} style={styles.txtClose}>
          <Text style={{marginTop: 10, color: 'red', fontWeight: 'bold', fontSize: 20 }}>Cerrar sesion</Text>
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
        //console.log(xhttp.responseText);
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
    const navigation = this.context;

    abrirPerfil = () => {
      console.log("Ha pulsado un perfil");
      navigation.navigate("Perfil");
    };

    cerrarSesion = () => {
      console.log("Ha cerrado sesion");
      navigation.navigate("Inicio");
    };

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

        <View style={{ marginTop: 0, marginBottom: 10}}>
        <Text style={{ color: 'black', fontSize: 30, fontWeight: 'bold', marginLeft: 50 }}>Lista de Trabajadores</Text>
        <FlatList style={{backgroundColor: "black", marginTop: 10, width: 380}}
          data={this.state.dataSource}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Perfil', { item })}
            style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
              <View>
                <Image
                  style={{
                    width: 150,
                    height: 150,
                    marginLeft: 20,
                    borderColor: 'black',
                    borderWidth: 1,
                    borderRadius: 20,
                  }}
                  source={{ uri: item.Imagen }} //Imagen del profesor
                  //source={{ uri: 'https://assets.stickpng.com/thumbs/585e4beacb11b227491c3399.png' }}
                />
              </View>
              <View style={{ marginLeft: 15 }}>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20}}>{item.Nombre}</Text>
                <Text style={{ color: 'white', fontSize: 16 }}>{item.Profesion}</Text>
                <Text style={{ color: 'white', fontSize: 16 }}>✆ {item.Telefono}</Text>
              </View>
            </TouchableOpacity>
          )}

          ItemSeparatorComponent={() => (
            <View style={{ height: 8, backgroundColor: 'white', marginVertical: 10 }} />
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
    marginTop: 50,
    height: 700,
    width: 150,
  },
  body: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgMenu: {
    marginRight: 350,
    marginTop: 42,
    height: 30,
    width: 30,
  },
});
