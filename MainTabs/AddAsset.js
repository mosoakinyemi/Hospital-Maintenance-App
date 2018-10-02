import React, { Component } from 'react';
import { Container, Header,Text, Left, Body, Right, Button, Icon, Title,Content,List,ListItem,Thumbnail,Item} from 'native-base';
import {StyleSheet,TouchableOpacity} from "react-native";
import PickerInput from './PickerInput'
import {connect} from 'react-redux'

 class AddAsset extends Component{
    
  static navigationOptions = ({ navigation }) => {
    return {
      title:'New Asset',
      headerStyle: {
      backgroundColor: '#6DD5FA',
    },
    headerTintColor: '#fff',
    };
  };
  
  render(){
    
    const {navigation} = this.props;
    return(
      <Container>
      <Content style={{margin:24}}>
      //Format for each Input item
      <Item>
        <Text style={styles.labelBtn}>#Title</Text>
        <PickerInput />
      </Item>
      //--end of item--//
      </Content>
    </Container>
    );
  }
}

const styles={
  labelBtn:{
        color:'yellow',

  },
}

const mapStateToProps=(state) =>{
  return state
}
export default connect(mapStateToProps)(AddAsset);

