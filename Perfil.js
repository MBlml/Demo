import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default class Perfil extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { route } = this.props;
    const { item } = route.params;

    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{ uri: item.Imagen }}
        />

        <View style={styles.textContainer}>
          <Text style={styles.name}>{item.Nombre}</Text>
          <Text style={styles.profession}>{item.Profesion}</Text>
          <Text style={styles.phone}>✆ {item.Telefono}</Text>
        </View>

        <View style={styles.starContainer}>
          <Text style={styles.rating}>★★★★☆</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    alignItems: 'center',
    flex: 1,
  },
  image: {
    width: 300,
    height: 300,
    marginTop: 60,
    marginLeft: 50,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 20,
  },
  textContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  name: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 40,
  },
  profession: {
    color: 'white',
    fontSize: 30,
  },
  phone: {
    color: 'white',
    fontSize: 30,
    marginTop: 30,
  },
  starContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  rating: {
    color: 'yellow',
    fontSize: 50,
  },
});
