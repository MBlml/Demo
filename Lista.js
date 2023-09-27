import React, { Component } from 'react'; //rnc
import { View, Text, FlatList, Item } from 'react-native';

export default class Lista extends Component {
  constructor(props) {
    super(props);
    console.log(xhttp.responseText);
    var json = JSON.parse(xhttp.responseText);
    this.state.jsondata.push(json);
    this.state = {
    };
  }

  render() {
    const Item = ({Nombre})
    return (
      <View style={{padding: 10}}>
        <Text>Flat List</Text>
        <FlatList
        padding= {10}
        data = {this.state.dataSourse}
        renderItem={({item}) => <Item titñe={item.Nombre}/>}     
        />
      </View>
    );
  }
}
