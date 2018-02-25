import React from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import {Header} from './src/component/common';
import AlbumList  from './src/component/AlbumList';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header headerText = {'Albums'} />
        <AlbumList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1
  }
});

AppRegistry.registerComponent('Albums', () => App);
