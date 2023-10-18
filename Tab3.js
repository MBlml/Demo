import React, { Component } from 'react';
import { View, StyleSheet, FlatList, Text, TouchableOpacity, Image } from 'react-native';
import MenuDrawer from 'react-native-side-drawer';
import { WebView } from 'react-native-webview';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';



export default class VideoPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
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
          <Text style={{ marginTop: 440, color: '#063970', fontWeight: 'bold', fontSize: 20 }}>Close</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.cerrarSesion} style={styles.txtClose}>
          <Text style={{ marginTop: 10, color: '#063970', fontWeight: 'bold', fontSize: 20 }}>Cerrar sesion</Text>
        </TouchableOpacity>
      </View>
    );
  };

  cerrarSesion = () => {
    console.log("Ha cerrado sesión");
    this.props.navigation.navigate('Inicio');
  };

  renderItem = ({ item }) => (
    <View style={styles.videoContainer}>
      
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Localizanos en el mapa</Text>
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          region={{
            latitude: 20.657520288847852,
            longitude: -103.3243897574106,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
        <Marker
        coordinate={{
          latitude: 20.657520288847852,
          longitude: -103.3243897574106,
        }}
        title="CUCEI"
        description="Centro Universitario de Ciencias Exactas e Ingenierias"
        />
        <Marker
        coordinate={{
          latitude: 20.656274,
          longitude: -103.325242,
        }}
        title="UCT2-LC04"
        description="Aula del curso Programacion para internet"
        />
        </MapView>
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

      </View>
      /* <View style={styles.container}>
        <Text style={{ color: 'black', fontSize: 30, fontWeight: 'bold', marginLeft: -30 }}>
          Localizar en el mapa
        </Text>
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
      </View> */
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: "80%",
    width: "100%",
    //justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    marginTop: 40,
    height: "115%",
    width: "100%",
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
    color: "black",
    marginLeft: 30,
  },
  /* container: {
    //flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  videoContainer: {
    width: 370,
    height: 270,
    margin: 10,
  },
  video: {
    //flex: 1,
  },
  titulo: {
    //color: "white",
    //backgroundColor: 'red',
    //backgroundColor: '#e27743',
    //color: "#063970",
    fontSize: 30,
    fontWeight:"bold",
    width: "100%",
    textAlign: "center",
  },*/
  animatedBox: {
    backgroundColor: '#e27743',
    color: 'red',
    padding: 10,
    marginTop: 0,
    height: 700,
    width: 150,
  },
  imgMenu: {
    marginLeft: -190,
    marginTop: -34,
    height: 30,
    width: 30,
  },
  /*flatList: {
    backgroundColor: '#e27743',
    marginTop: 10,
  }, */
});
