import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class ComplainText extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.complains}</Text>
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
