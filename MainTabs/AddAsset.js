import React, { Component } from 'react';
import { Container, Header,Text, Left, Body, Right, Button, Icon, Title,Content,List,Form,Label,Input,ListItem,Thumbnail,Item} from 'native-base';
import {StyleSheet,TouchableOpacity} from "react-native";
import PickerInput from './PickerInput'
import {connect} from 'react-redux'

 class AddAsset extends Component{
     state={
text:''
}
    
  static navigationOptions = ({ navigation }) => {
    return {
      title:'New Asset',
      headerStyle: {
      backgroundColor: '#6DD5FA',
    },
    headerTintColor: '#fff',
    };
  };

submit=()=>{
  
    var value=this.state.text
    this.props.dispatch({type:'UPDATE_EQUIMPMENT_NAME',value})
    console.log(`From Redux ${this.props.newEname}`)
  }
  render(){
  
    const {navigation} = this.props;
   
    return(
      <Container>
      <Content style={{margin:24}}>
      <Item>
        <PickerInput title='EQUIPMENT CATEGORY'/>
      </Item>
     <Item>
          <Form>
          <Text style={{color:'blue'}}>NAME OF EQUIPMENT</Text>
            <Item>
              <Input
               onChangeText={(text) => this.setState({text})} />
            </Item>
          </Form>
     </Item>
     <Item>
     <Button primary full
     onPress={()=>this.submit(this.state.text)}
     >
     <Text>  submit  </Text>
     </Button>
     </Item>
      </Content>
      </Container>
    );
  }
}


const mapStateToProps=(state) =>{
  return state
}
export default connect(mapStateToProps)(AddAsset);

