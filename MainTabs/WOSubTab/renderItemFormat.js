import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title ,Tab,Content,Tabs} from 'native-base';
import DetailsTab from './WOSubTab/DetailsTab';
import TasksTab from './WOSubTab/TasksTab';
import PartsTab from './WOSubTab/PartsTab';
import FilesTab from './WOSubTab/FilesTab';

import {StyleSheet} from "react-native";

export default class assetsTab extends Component {
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
            <Title style={{color:'white'}}>Header</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='search' style={{color:'white'}} />
            </Button>
          </Right>
        </Header>

        <Tabs >
          <Tab heading="Details">
            <DetailsTab />  
           </Tab>
          <Tab heading="Tasks">
            <TasksTab />
          </Tab>
          <Tab heading="Parts" >
            <PartsTab />
          </Tab>
          <Tab heading="Files" >
            <FilesTab />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

const styles={
  header:{backgroundColor:'#6DD5FA'},

};

