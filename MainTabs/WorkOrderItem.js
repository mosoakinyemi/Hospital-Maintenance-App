import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title ,Tab,Content,Tabs,Text,
Card,CardItem} from 'native-base';
import {StyleSheet} from "react-native";
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
export default class WorkOrderItem extends Component {
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
            <Title style={{color:'white'}}>Work Order #{id}</Title>
          </Body>
          <Right>
            <Button transparent>
             <Text style={{color:'white'}}> Edit </Text>
            </Button>
          </Right>
        </Header>
      
      <Content>
      <Card>
            <CardItem>
              <Left>
                <Thumbnail source={require()} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>GeekyAnts</Text>
                </Body>
              </Left>
            </CardItem>
      </Card>
      </Content>
      
      </Container>
    );
  }
}

const styles={
  header:{backgroundColor:'#6DD5FA'},

};

