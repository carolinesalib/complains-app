import React, {Component} from 'react';
import {StyleSheet, Button, View} from 'react-native';

export default class UndoComplainButton extends Component {
  render() {

    var onPressLearnMore = function() {

    }

    return (
      <View style={styles.container}>
        <Button
          onPress={onPressLearnMore}
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
