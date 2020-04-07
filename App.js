import React from 'react';
import { StyleSheet, Text, SafeView, TextInput } from 'react-native';
import Home from './app/components/Home/Home.component'

export default function App() {
  return (
        <Home/>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
