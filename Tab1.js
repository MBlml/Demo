import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Modal, TextInput } from 'react-native';
import MenuDrawer from 'react-native-side-drawer';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

export default class Tab1 extends Component {
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
            <Text style={{color: "white", fontWeight: "bold", fontSize: 20}}>
              Bienvenido: {this.props.route.params.nombre}
            </Text>
            <TouchableOpacity onPress={this.toggleOpen} style={styles.txtClose}>
              <Text style={styles.txtClose}>Cerrar</Text>
            </TouchableOpacity>
          </View>
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
          opacity={0.4}
        >
          <TouchableOpacity onPress={this.toggleOpen} style={styles.body}>
            <Image  style={styles.imgMenu} source={require('./imagenes/drawer.png')} />
          </TouchableOpacity>
        </MenuDrawer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      color: "white",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 0,
    },
    animatedBox: {
      flex: 1,
      backgroundColor: "black",
      color: "red",
      padding: 10,
      marginTop: 60,
    },
    txtClose: {
        marginTop: 1,
        marginTop: 230,
        color: "red",
    },
    body: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
    },
    imgMenu: {
        marginLeft: 340,
    }
})
