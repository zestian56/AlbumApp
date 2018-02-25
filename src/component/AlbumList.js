import React, { Component } from 'react';
import { ScrollView, Text, TextInput, View  } from 'react-native';
import axios from 'axios'
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {

  

  state = {
    albums: []
  }

  componentWillMount() {
    axios.get('http://rallycoding.herokuapp.com/api/music_albums')
    .then(response => this.setState({albums: response.data}))
  }
  getAlbums() {
    return this.state.albums.map(album => 
      <AlbumDetail key={album.title} album={album} />
    );
  }
  render() {
    console.log(this.state);
    return (   
      <ScrollView>
        {this.getAlbums()}
      </ScrollView>
  
    );
  }
}

export default AlbumList;
