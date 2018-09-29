import React, { Component } from 'react';
import { Container,Thumbnail,Left, Body, Right, Button, Icon, Title, Tab, Content, Tabs, List, ListItem, Text,} from 'native-base';
import { StyleSheet } from 'react-native';


export default class WorkOrderTab extends Component {
  render() {
    const {
      id,
      dueDate,
      image,
      task,
      machine,
      department,
      maintenance,
      notes,
    } = this.props.orderDetails;
  
    return (
      <List >
        <ListItem itemDivider >
          <Left>
            <Icon style={{ fontSize: 18 }}  name="calendar" />
            <Text>DUE: {dueDate}</Text>
          </Left>
        </ListItem>
        <ListItem   thumbnail >
          <Left>
           <Thumbnail square source={image} />
          </Left>
          <Body>
            <Text>{task}</Text>
            <Text style={{fontStyle:'bold'}}>{machine}</Text>
          </Body>
          <Right>
            <Button rounded style={{backgroundColor:maintenance==='Normal'?'green':maintenance==='Medium'?'blue':'red', opacity:0.7}}>
              <Text>{maintenance}</Text> 
            </Button>
          </Right>
        </ListItem>
        <ListItem>
        <Left> 
          <Text>#{id}</Text>
          <Body> 
          <Text style={styles.boldText}>{department}</Text>
       </Body>
         </Left>
        
        <Right> 
           <Text>{maintenance}</Text> 
        </Right>
        </ListItem>
      
      </List>
    );
  }
}
const styles = {
  header: { backgroundColor: '#6DD5FA' },
  boldText: { fontStyle: 'bold' },
 

};
