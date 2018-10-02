import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem,Fab,Text,Button,Icon,Left,Right,Body,Title } from 'native-base';
import {StyleSheet} from 'react-native';
import WorkOrderList from './WorkOrderList'
//images
const ecg = require('../assets/ecg.png')
const mri = require('../assets/mri.jpg')
const spy = require('../assets/spy.jpg')
const suc = require('../assets/suc.jpg')
const def = require('../assets/default.png')

export default class WorkOrderTab extends Component {
  render() {
  var items = [{id:1,dueDate:'MON, SEP 3',image:suc,task:'Replace motor and tube',machine:'Suction Machine',department:'Pediatric unit',maintenance:'Urgent'},
    {id:2,dueDate:'MON, SEP 1', image:mri,task:'Inspect and Fix arm bearings ',machine:'MRI Machine',department:'Radiotherapy',maintenance:'Normal'},
    {id:3,dueDate:'WED, APR 22', image:spy,task:'Refill mecury and test',machine:'Sphygmanometer Machine',department:'Main Theater',maintenance:'Medium'},
    {id:4,dueDate:'SUN, JUN 17', image:def,task:'Contact suppliers to service',machine:'Ventilator',department:'Intensive Care unit',maintenance:'Normal'},
    {id:5,dueDate:'TUE, AUG 5', image:suc,task:'Change oil and filter',machine:'Suction Machine',department:'Dialysis unit',maintenance:'Medium'}    ];
    return (
      <Container>
        <Header style={styles.header} hasTabs>
          <Left>
            <Button transparent success>
              <Icon name='arrow-back' style={{color:'white'}}  />
            </Button>
          </Left>
          <Body>
            <Title style={{color:'white'}}>Work Orders</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='search' style={{color:'white'}} />
            </Button>
          </Right>
        </Header>
        <Content>
          <List dataArray={items}
            renderRow={(item) =>
              <WorkOrderList  orderDetails={item}/>
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
