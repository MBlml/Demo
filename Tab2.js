import React, { Component } from 'react';
import { View, StyleSheet, FlatList, Text, TouchableOpacity, Image } from 'react-native';
import MenuDrawer from 'react-native-side-drawer';
import { WebView } from 'react-native-webview';

const videos = [
  { id: 1, url: 'https://www.youtube.com/watch?v=tAGnKpE4NCI' },
  { id: 2, url: 'https://www.youtube.com/watch?v=8JPtxtSK-Cs' },
  { id: 3, url: 'https://www.youtube.com/watch?v=SBjQ9tuuTJQ' },
];

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
          <Text style={{ marginTop: 580, color: '#063970', fontWeight: 'bold', fontSize: 20 }}>Close</Text>
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
      <WebView 
      source={{ uri: item.url }} 
      style={styles.video}
      />
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ color: 'black', fontSize: 30, fontWeight: 'bold', marginLeft: -30 }}>Videos de YouTube</Text>
        <FlatList
          data={videos}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.id.toString()}
          horizontal={true}
          style={styles.flatList}
        />

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
    );
  }
}

const styles = StyleSheet.create({
  container: {
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
  },
  animatedBox: {
    backgroundColor: '#e27743',
    color: 'red',
    padding: 10,
    marginTop: 235,
    height: 700,
    width: 150,
  },
  imgMenu: {
    marginRight: 350,
    marginTop: -334,
    height: 30,
    width: 30,
  },
  flatList: {
    backgroundColor: '#e27743',
    marginTop: 10,
  },
});
