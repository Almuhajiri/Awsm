import React from 'react';
import { Text, View, Image } from 'react-native';
import Judul from './Components/Judul';

export default class App extends React.Component{
  render(){
    return (
      <View>
        <Judul/>
        <Text>Yunus Mutashimbillah Almuhajiri</Text>
        <Text>XI RPL 4 / 36</Text>
        <Text>SMK Telkom Purwokerto</Text>
        <Image source={require('./img.jpg')}/>
      </View>
    )
  }
}