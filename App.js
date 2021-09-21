import React from 'react';
import Home from './screens/homepage'
import { View, StyleSheet } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
  }
});