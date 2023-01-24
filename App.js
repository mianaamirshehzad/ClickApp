import React from 'react';
import { StyleSheet, Text, View } from "react-native";

import Task from "./src/components/Task";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <Text style={styles.title}>
          Today's Tasks
        </Text>
        <View style={styles.item}>
          {/* Here our task list will appear */}
          <Task text={"Complete the App"} />
          <Task text={"Buy a Book"} />
          <Task text={"Complete the App of FYP"} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  taskWrapper: {
    paddingTop: 80,
    paddingLeft: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  item: {
    marginTop: 30,
  }
});
