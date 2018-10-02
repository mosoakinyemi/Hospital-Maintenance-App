import React, { Component } from 'react';
import { Container, Header, View, Button, Icon, Fab } from 'native-base';
export default class FABExample extends Component {
 state = {
      active: 'true'
    };
  render() {
    return (  
        <View >
          <Fab
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#5067FF' }}
            position="bottomRight"
            onPress={() => this.props.navigation.navigate('AddAsset')}>
            <Icon name="add" />
          </Fab>
        </View>
    );
  }
}