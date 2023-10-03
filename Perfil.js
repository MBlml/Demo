import React from 'react';
import { View, Text, Image } from 'react-native';

function Perfil({ route }) {
  const { item } = route.params;

  return (
    <View style={{backgroundColor: 'black'}}>
      <Image
        style={{ width: 300, height: 300, marginTop: 60, marginLeft: 50, 
                alignItems: 'center', borderWidth: 2, borderColor: 'black', borderRadius: 20,}}
        source={{ uri: item.Imagen }}
      />

      <View style={{ marginTop: 30, alignItems: 'center'}}>
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 40 }}>{item.Nombre}</Text>
        <Text style={{ color: 'white', fontSize: 30 }}>{item.Profesion}</Text>
        <Text style={{ color: 'white', fontSize: 30, marginTop: 30 }}>✆{item.Telefono}</Text>
      </View>

      {/*Estrellas de evaluacion opcionales*/}
      <View style={{ marginTop: 30, alignItems: 'center'}}>
        <Text style={{ color: 'yellow', fontSize: 50,}}>
        ★★★★☆
        </Text>
      </View>
      
    </View>
  );
}

export default Perfil;
