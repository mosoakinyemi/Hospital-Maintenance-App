import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title ,Tab,Content,Tabs,Text} from 'native-base';

import {StyleSheet} from "react-native";

export default class WorOrdersTab extends Component {
  render() {
    return (
      <Container>
          <Text> WO for this asset </Text>
      </Container>
    );
  }
}

const styles={
  header:{backgroundColor:'#6DD5FA'},

};

