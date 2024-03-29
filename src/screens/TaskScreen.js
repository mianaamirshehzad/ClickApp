import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, Text, View, KeyboardAvoidingView, FlatList, Keyboard, TextInput, TouchableOpacity } from "react-native";
import { doc, setDoc, getFirestore, collection } from 'firebase/firestore';
import Task from '../components/Task';
import app from '../Firebase';
import { getAuth } from 'firebase/auth';
import axios from 'axios';


export default function TaskScreen(props) {

  const db = getFirestore(app);
  const auth = getAuth();

  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [temperature, setTemperature] = useState("");

  const addTask = async () => {
    //Using spread operator to add new and previous task together
    Keyboard.dismiss();
    console.log(task)
    // setTaskList(...taskList, task);
    if (taskList !== null) {
      taskList.push(task);
    } else {
      setTaskList(task)
    }
    setTask(null); //This will empty the textbox
  };

  const markTaskAsComplete = (index) => {
    let itemsCopy = [...taskList];
    itemsCopy.splice(index, 1);
    setTaskList(itemsCopy);
    console.log('Task marked as done')
  };

  const getTemperture = async () => {
    try {
      let url = "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=c9111fea1d9e35e45092c5b4d56507d4";
      const response = await axios.get(url)
        .then((response) => {
          console.log(response);
          // Code for handling the response
          setTemperature(response.data);
        })
        .catch((error) => {
          alert('Error')
          // Code for handling the error
        })
    } catch (error) {
      console.log(error);

    }
  };

  useEffect(() => {
    getTemperture();
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <Text>
          {/* Temperature: {temperature.main.temp} */}
          {/* City: {temperature.name} */}
        </Text>
        <Text style={styles.title}>
          Today's Tasks
        </Text>
        <ScrollView>
          <View style={styles.item}>
            {/* Here our task list will appear */}
            {
              taskList.map((item, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => markTaskAsComplete(index)} >
                    <Task
                      text={item}
                    />
                  </TouchableOpacity>
                )
              })
            }

          </View>
        </ScrollView>
      </View>

      {/* Write a New Task Section */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.writeTastWrapper} >
        <TextInput
          placeholder="Write your task"
          onChangeText={(text) => setTask(text)}
          value={task}
          style={styles.input} />
        <TouchableOpacity
          onPress={() => addTask()} >
          <View style={styles.addWrapper} >
            <Text style={styles.addText} >
              +
            </Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
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
    paddingRight: 10
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  item: {
    marginTop: 30,
  },
  writeTastWrapper: {
    position: 'absolute',
    bottom: 30,
    justifyContent: 'space-around',
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row'
  },
  input: {
    paddingVertical: 15,
    width: 250,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,

  },
  addWrapper: {
    height: 60,
    width: 60,
    backgroundColor: '#008000',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {
    color: 'white'
  }
});
