import React, { Component } from 'react';
import { Container, Header,Text, Left, Body, Right, Button, Icon, Title ,Tab,Content,Tabs,List,ListItem,Thumbnail} from 'native-base';
import {StyleSheet,TouchableOpacity} from "react-native";
import DetailsTab from './AsssetItemTabs/DetailsTab';
import WorkOrdersTab from './AsssetItemTabs/WorkOrdersTab';


export class AssetItem extends Component{
    
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
       <Tabs>
          <Tab heading="Details">
            <DetailsTab name={itemId} />
          </Tab>
          <Tab heading="Work Orders">
            <WorkOrdersTab  />
          </Tab>
        </Tabs>
      </Content>
    </Container>
    );
  }
}

