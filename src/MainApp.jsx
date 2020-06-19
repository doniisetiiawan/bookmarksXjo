import React from 'react';
import { StyleSheet, View } from 'react-native';
import store from './redux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

function MainApp() {
  return <View style={styles.container} />;
}

export default MainApp;
