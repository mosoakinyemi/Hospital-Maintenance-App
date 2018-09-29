import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title ,Tab,Content,Tabs,TabHeading,Text} from 'native-base';
import AssetTab from './MainTabs/AssetTab';
import WorkOrderTab from './MainTabs/WorkOrderTab';
import ScanTab from './MainTabs/ScanTab';
import MoreTab from './MainTabs/MoreTab';

import {StyleSheet} from "react-native";
export default class HeaderExample extends Component {
  render() {
    return (
      <Container style={{marginTop:24}}>
        <Tabs tabBarPosition="bottom" >
          <Tab  heading={ <TabHeading><Icon type="FontAwesome" name="home" /><Text>Assets</Text></TabHeading>}>
            <AssetTab />
          </Tab>
          <Tab heading={ <TabHeading><Icon name="paper" /><Text>Work Orders</Text></TabHeading>}>
            <WorkOrderTab />
          </Tab>
          <Tab heading={ <TabHeading><Icon name="camera" /><Text>Scan</Text></TabHeading>} >
            <ScanTab />
          </Tab>
          <Tab heading={ <TabHeading><Icon  name="keypad" /><Text>More</Text></TabHeading>} >
            <MoreTab />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

const styles={
  header:{backgroundColor:'#6DD5FA'},

};

