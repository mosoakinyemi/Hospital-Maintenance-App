import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title ,Tab,Content,Tabs} from 'native-base';

import {StyleSheet} from "react-native";

export default class ScanTab extends Component {
  render() {
    return (
      <Container>
          <Left>
            <Button transparent success>
              <Icon name='arrow-back' style={{color:'white'}}  />
            </Button>
          </Left>
          <Body>
            <Title style={{color:'white'}}>Scan</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='search' style={{color:'white'}} />
            </Button>
          </Right>
      </Container>
    );
  }
}

const styles={
  header:{backgroundColor:'#6DD5FA'},

};

