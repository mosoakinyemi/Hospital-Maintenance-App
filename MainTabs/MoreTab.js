import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title ,Tab,Content,Tabs} from 'native-base';

import {StyleSheet} from "react-native";

export default class MoreTab extends Component {
  render() {
    return (
      <Container>
      <Header style={styles.header} hasTabs>
          <Left>
            <Button transparent success>
              <Icon name='arrow-back' style={{color:'white'}}  />
            </Button>
          </Left>
          <Body>
            <Title style={{color:'white'}}>More</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='search' style={{color:'white'}} />
            </Button>
          </Right>
        </Header>
             
      </Container>
    );
  }
}

const styles={
  header:{backgroundColor:'#6DD5FA'},

};

