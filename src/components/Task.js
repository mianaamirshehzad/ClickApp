import React from "react";
import { View, Text, StyleSheet, Platform, TouchableOpacity, KeyboardAvoidingView, TextInput } from "react-native";

const Task = (props) => {
    return (
        <View style = {styles.item} >
            <View style = {styles.itemLeft}>
                <TouchableOpacity style = {styles.square}></TouchableOpacity>
                <Text style = {styles.text}>{props.text}</Text>
            </View>
            <View style = {styles.circular}></View>

            {/* Write a New Task Section */}
            <KeyboardAvoidingView
               behavior= {Platform.os === 'ios' ? 'padding' : 'height' }
               style = {styles.writeTastWrapper} >
                <TextInput />
            </KeyboardAvoidingView>
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'white',
        padding: 15, 
        borderRadius: 10,
        marginBottom: 5,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'

    },
    square: {
        width: 25,
        height: 25,
        backgroundColor: '#55BCF6',
        borderRadius: 6,
        opacity: 0.4,
        marginRight: 15,
    },
    text: {
        maxWidth: '80%',

    },
    circular: {
        width: 12,
        height: 12,
        borderColor: '#55BCF6',
        borderRadius: 5,
        borderWidth: 2
    }
});

export default Task;