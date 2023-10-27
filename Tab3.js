import React, { Component } from 'react';
import { View, StyleSheet, FlatList, Text, TouchableOpacity, Image, Dimensions } from 'react-native';
import MenuDrawer from 'react-native-side-drawer';
import { WebView } from 'react-native-webview';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import MapViewDirections from 'react-native-maps-directions';

const GOOGLE_MAPS_APIKEY = 'AIzaSyCwmihmqF3fdfrie-7oTF9owVxrmlCpKtw';

const CUCEICOORDS = {
  latitude: 20.65514,
  longitude: -103.32545,
  latitudeDelta: 0.015,
  longitudeDelta: 0.0121
}

const ESATADIOJALISCOCOORDS = {
  latitude:20.70521,
  longitude: -103.32819,
}

export const MARKERS_DATA = [
  {
    id: '1',
    latitude: 20.65617705390352,
    longitude: -103.32516121292288,
    color: '#2F3136',
    name: 'Edificio Alfa',
    //direction: 'Carrer de Pujades, 100',
  },
  {
    id: '2',
    latitude: 20.658270650226928,
    longitude: -103.3268111038433,
    color: '#A3EAD8',
    name: 'Edificio X',
    //direction: 'Carrer de Pujades, 101',
  },
  {
      id: '3',
      latitude: 20.656448109986417,
      longitude: -103.32522290372962,
      color: '#A3EAD8',
      name: 'Edificio Beta',
      //direction: 'Carrer de Pujades, 101',
    },
];

export default class TAB3 extends Component {
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
          /*region={{
                latitude: LATITUDE,
                longitude: LONGITUDE,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
          }} */
          region={CUCEICOORDS}
          showsUserLocation={true}
          followsUserLocation={true}
          >
          {MARKERS_DATA.map((marker) => (
          <Marker
              key={marker.id}
              coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude,
              }}
              title={marker.name}
              description='Esto es en Cucei'
          ></Marker>
          ))}
          <MapViewDirections
            /* origin={{latitude:20.65752028847852,
                    longitude: -103.324389574106,}}
            destination={{latitude:20.70521,
                          longitude: -103.32819,}} */
            origin={CUCEICOORDS}
            destination={ESATADIOJALISCOCOORDS}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={5}
            strokeColor='lightblue'
            onReady={result => {
              console.log(`La distancia entre CUCEI y el Estadio Jalisco es de: ${result.distance} km`)
              console.log(`La duración del recorrido es de: ${result.duration} min.`)
            }}
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
