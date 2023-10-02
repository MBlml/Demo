import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image,  Modal, TextInput, FlatList} from 'react-native';
import MenuDrawer from 'react-native-side-drawer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//-> npm install @react-navigation/bottom-tabs

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
            <Text style={{color: "white", fontWeight: "bold", fontSize: 20,}}>Bienvenido: {this.props.route.params.nombre} </Text>
          <TouchableOpacity onPress={this.toggleOpen} style={styles.txtClose}>
            <Text style={styles.txtClose}>Close</Text>
          </TouchableOpacity>
          </View>
        );
      };

  componentDidMount() {
    var xhttp = new XMLHttpRequest();
    _this = this;
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       console.log(xhttp.responseText);
       var Temp = JSON.parse(xhttp.responseText);
       _this.setState({dataSource:Temp});
    }
  };
xhttp.open("GET", "https://dcc2.000webhostapp.com/2023B/datos.json", true);
xhttp.send();
  }

  //Pantalla de Tab1
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
            <Image  style={styles.imgMenu} source={require('./imagenes/drawer.png')} />
          </TouchableOpacity>
        </MenuDrawer>

        <View style={{marginTop: 20, backgroundColor:"gray"}}>
          <Text style={{color: "black", fontSize: 30,}}>Lista de Trabajadores</Text>
          <FlatList
            data={this.state.dataSource}
            renderItem={({item}) => 
            <View style={{height:300}}>
              <Text style={{color: "black", marginTop: 15}}>{item.Nombre}</Text>
              <Text style={{color: "black", marginTop: 15}}>{item.Profesion}</Text>
              <Text style={{color: "black", marginTop: 15}}>{item.Telefono}</Text>
              <View>
                <Image 
                style={{width:150, height:150,}}
                source={{uri:(item.Imagen)}}
                />
              </View>
              <TouchableOpacity>Hola</TouchableOpacity>
              <View style={{width:300,height:3,backgroundColor:"gray",marginTop:4}}></View>
            </View>
          }
          />
          
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
    //  flex: 1,
      backgroundColor: "#gray",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 0,
      zIndex: 0,
      color: "white",
    },
    //Menu desplegable
    animatedBox: {
      //flex: 1,
      backgroundColor: "black",
      color: "red",
      padding: 10,
      marginTop: 65,
      height: 700,
      width: 150,
    },
    txtClose: {
        marginTop: 1,
        marginTop: 220,
        color: "red",
        fontWeight: "bold",
    },
    body: {
      // flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    imgMenu: {
        marginLeft: 360,
        marginTop: 40,
        height: 30,
        width: 30,
    }
  })














/* import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
  TextInput,
} from 'react-native';
import MenuDrawer from 'react-native-side-drawer';

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      Nombre: this.props.route.params.nombre,
    };
  }

  toggleOpen = () => {
    this.setState({ open: !this.state.open });
  };
  
  btn1 = () => {
    console.log('Has dado click al boton 1');
  };

  btn2 = () => {
    console.log('Has dado click al boton 2');
  };

  btn3 = () => {
    console.log('Has dado click al boton 3');
  };

  btn4 = () => {
    console.log('Has dado click al boton 4');
  };

  // Menu desplegable
  drawerContent = () => {
    return (
      <TouchableOpacity style={styles.animatedBox}>
        <View style={styles.topButtonsContainer}>
          <Image style={styles.imgIcon} source={require('./imagenes/icon.png')} />

          <TouchableOpacity onPress={this.btnInicio} style={styles.animatedBox}>
            <Text style={styles.textMenu}>Boton 1</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={this.btnRegistro}
            style={styles.animatedBox}>
            <Text style={styles.textMenu}>Boton 2</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.btn3} style={styles.animatedBox}>
            <Text style={styles.textMenu}>Boton 3</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.btn4} style={styles.animatedBox}>
            <Text style={styles.textMenu}>Boton 4</Text>
          </TouchableOpacity>
        </View>

          <Text style={styles.textClose} onPress={this.toggleOpen}>Close</Text>

      </TouchableOpacity>
    );
  };

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
          opacity={0.4}>
          <TouchableOpacity onPress={this.toggleOpen} style={styles.body}>
            <Image  style={styles.imgMenu} source={require('./imagenes/drawer.png')} />
          </TouchableOpacity>
        </MenuDrawer>

        <Text style={styles.textTitle}>
          Bienvenido "Nombre"{this.Nombre}
        </Text>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginTop: 0,
  },
  animatedBox: {
    backgroundColor: 'black',
    padding: 10,
    paddingTop: 30,
  },
  body: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 16,
    marginTop: 40,
  },
  textMenu: {
    color: 'white',
    fontSize: 20,
  },
  textTitle: {
    marginRight: 0,
    textAlign: "right",
    fontWeight: 'bold',
    color: 'black',
    fontSize: 30,
    marginTop: 50,
  },
  textClose: {
    color: 'red',
    fontSize: 20,
    marginTop: 265,
  },
  imgIcon: {
    height: 60,
    width: 140,
  },
  imgMenu: {
    marginLeft: 10,
  },
}); */

