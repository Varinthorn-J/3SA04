import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Weather from './Weather';

export default function App() {
  
  return (
    <View style={styles.container}>
          <Weather ipcode = "83120" />
          <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth:2,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    

  },
})