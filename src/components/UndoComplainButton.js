import React, {Component} from 'react';
import {StyleSheet, Button, View} from 'react-native';

export default class UndoComplainButton extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={this.props.removeComplain}
          title="Undo"
          accessibilityLabel="Delete last complain"
          color="#1F2D3D"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    width: '90%',
    height: 50,
    backgroundColor: '#7CCBCE',
  }
});
