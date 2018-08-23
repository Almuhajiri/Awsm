import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Yunus Mutashimbillah Almuhajiri</Text>
        <Text>XI RPL 4 / 36</Text>
        <Text>SMK Telkom Purwokerto</Text>
        <Image source={require('./img.jpg')}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
