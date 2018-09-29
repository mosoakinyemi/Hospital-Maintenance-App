 import React, { Component } from 'react';
import { Container, Header,Text, Left, Body, Right, Button, Icon, Title ,Tab,Content,Tabs,List,ListItem,Thumbnail} from 'native-base';

import {StyleSheet,TouchableOpacity} from "react-native";

export default class AssetList extends React.Component {
getImage=()=>{
      return this.props.machine.image;
    }
  render() {
    
    const {id,type,model,image,} = this.props.machine;
          return(    
          <ListItem thumbnail button onPress={() => this.props.navigation.navigate('DetailsScreen',{newName:type})}>
              <Left>
                <Thumbnail square source={image} />
              </Left>
              <Body>
                <Text>{type}</Text>
                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Button transparent>
                <Icon active type="FontAwesome" name="file" />
                  <Text>{id}</Text>
                </Button>
              </Right>
            </ListItem>
);
  }
}



