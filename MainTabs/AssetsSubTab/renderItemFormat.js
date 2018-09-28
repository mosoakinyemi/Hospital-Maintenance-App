import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title ,Tab,Content,Tabs} from 'native-base';
import DetailsTab from "./AssetsSubTab/DetailsTab";
import WorkOrdersTab from "./AssetsSubTab/WorkOrdersTab";

import {StyleSheet} from "react-native";

export default class AssetsTab extends Component {
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
          <Tab heading="DETAILS">
            <DetailsTab />
          </Tab>
          <Tab heading="WORK ORDERS">
            <WorkOrdersTab />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

const styles={
  header:{backgroundColor:'#6DD5FA'},

};

