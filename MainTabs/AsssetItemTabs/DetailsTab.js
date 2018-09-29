
import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title ,Tab,Content,Tabs,Text,Card,CardItem,Thumbnail} from 'native-base';

import {StyleSheet,Image} from "react-native";

export default class DetailsTab extends Component {
  render() {
    return (
      <Container>
          <Text> WO for this asset {this.props.name}</Text>
          <Image source={require('../../assets/ecg.png')} 
           style={{width: 200, height: 200}}/>
      </Container>
    );
  }
}
const styles={
  header:{backgroundColor:'#6DD5FA'},

};
