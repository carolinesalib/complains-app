import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import ComplainButton from './src/components/ComplainButton';
import UndoComplainButton from './src/components/UndoComplainButton';
import ComplainText from './src/components/ComplainText';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <ComplainText />
        </View>
        <View style={styles.buttons}>
          <ComplainButton />
          <UndoComplainButton />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttons: {
    width: '100%',
    height: 110,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20
  }
});
