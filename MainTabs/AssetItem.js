import React, { Component } from 'react';
import { Container, Header,Text, Left, Body, Right, Button, Icon, Title ,Tab,Content,Tabs,List,ListItem,Thumbnail} from 'native-base';

import {StyleSheet,TouchableOpacity} from "react-native";

export default class AssetItem extends Component{
    
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('newName', 'Equipment'),
      headerStyle: {
      backgroundColor: '#6DD5FA',
    },
    headerTintColor: '#fff',
    };
  };
  render(){
    const {navigation} = this.props;
    const itemId = navigation.getParam('newName', 'NO-name');
    return(
      <Container>
      <Content>
      <Text>This is the Details of the {itemId}</Text>
      </Content>
    </Container>
    );
  }
}