import React, { useState } from 'react';
import { StyleSheet, ScrollView, Text, View, KeyboardAvoidingView, Keyboard, TextInput, TouchableOpacity } from "react-native";

import Navigation from './src/navigation';

export default function App() {
  return (
    <View style={styles.container}>
      <Navigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
});
