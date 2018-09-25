import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class ComplainText extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>0</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  text:{
    color: '#5F558C',
    fontSize: 100
  }
});
