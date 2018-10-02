import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title ,Tab,Content,Tabs,Text} from 'native-base';
import Scanner from './Scanner'
import {StyleSheet} from "react-native";
import Torch from 'react-native-torch';


export default class ScanTab extends Component {
  state = {
      isTorchOn: false,
    };

  _handlePress=()=> {
    const { isTorchOn } = this.state;
    Torch.switchState(!isTorchOn);
    this.setState({ isTorchOn: !isTorchOn });
  }
  render() {
    return (
      <Container style={{marginTop:24}}>
      <Button primary onPress={this._handlePress}><Text> Light on </Text></Button>
         <Scanner />
      </Container>
    );
  }
}

const styles={
  header:{backgroundColor:'#6DD5FA'},

};

