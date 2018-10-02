import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Picker,Icon,Text} from 'native-base';
import {connect} from 'react-redux'
 class PickerInput extends Component {
    constructor(props) {
    super(props);
    this.state = {
      selected2: undefined
    };
  }
  onValueChange2(value: string) {
    this.setState({
      selected2: value
    }),
   console.log(`From Picker: ${value}`),
  this.props.dispatch({type:'UPDATE_VALUE',value}),
    console.log(`from redux ${this.props.anser}`) 
  }
  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="ios-arrow-down-outline" />}
                style={{ width: undefined }}
                placeholder="Select your SIM"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
              >
                <Picker.Item label="Wallet" value="Wallet" />
                <Picker.Item label="ATM Card" value="ATM Card" />
                <Picker.Item label="Debit Card" value="Debit" />
                <Picker.Item label="Credit Card" value="Credit " />
                <Picker.Item label="Net Banking" value="Net" />
              </Picker>
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps=(state)=>{
  return state
}

export default connect(mapStateToProps)(PickerInput);