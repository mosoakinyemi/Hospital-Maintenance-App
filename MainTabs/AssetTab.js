import React, { Component } from 'react';
import { Container, Header,Text, Left, Body, Right, Button, Icon, Title ,Tab,Content,Tabs,List,ListItem,Thumbnail} from 'native-base';
import AssetList from './AssetList';
import {StyleSheet,TouchableOpacity} from "react-native";


const ecg = require('../assets/ecg.png')
const mri = require('../assets/mri.jpg')
const spy = require('../assets/spy.jpg')
const suc = require('../assets/suc.jpg')

export default class AssetsTab extends Component {

  render() {
      var items = [{id:1,type:'ECG',model:1,image:ecg},{id:2,type:'SUC',model:2,image:suc},{id:3,type:'MRI',model:3, image:mri},{id:4,type:'SPY',model:2, image:spy}];

    return (
      <Container>
      <Header style={styles.header} hasTabs>
          <Left>
            <Button transparent success>
              <Icon name='arrow-back' style={{color:'white'}}  />
            </Button>
          </Left>
          <Body>
            <Title style={{color:'white'}}>Assets</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='search' style={{color:'white'}} />
            </Button>
          </Right>
        </Header>
        <Content>
          <List  dataArray={items}
              renderRow={(item) =>
              
               <AssetList machine={item} /> 
                }>
            </List>
        </Content>
      </Container>
    );
  }
}

const styles={
  header:{backgroundColor:'#6DD5FA'},
};

