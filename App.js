import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import ComplainButton from './src/components/ComplainButton';
import UndoComplainButton from './src/components/UndoComplainButton';
import ComplainText from './src/components/ComplainText';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      complains: 0
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <ComplainText complains={this.state.complains} />
        </View>
        <View style={styles.buttons}>
          <ComplainButton addComplain={this.addComplain} />
          <UndoComplainButton removeComplain={this.removeComplain} />
        </View>
      </View>
    );
  }

  addComplain = () => {
    this.setState({ complains: this.state.complains + 1 });
  }

  removeComplain = () => {
    if (this.state.complains > 0) {
      this.setState({ complains: this.state.complains - 1 });
    }
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
