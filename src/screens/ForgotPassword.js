import { View, Text, Button, TextInput, Image, ScrollView, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import { useState } from 'react';
// import { getAuth, sendPasswordResetEmail } from "firebase/auth";


import CustomButton from '../components/CustomButton';;
import CustomInput from '../components/CustomInput';

const Forgot = (props) => {
    // const auth = getAuth();

    const [email, setEmail] = useState('');

    const reset = () => {
        try {
            sendPasswordResetEmail(auth, email)
                .then(() => {
                    // Password reset email sent!
                    // ..
                    alert("Reset email has been sent. Please check your inbox")
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // ..
                });
        } catch (error) {
            alert("Error in sending email")
        }
    }


    return (
        <View style={styles.container} >
            <Image
                source={require('../assets/forgot.jpg')}
                style={styles.image} />
            <Text style={styles.subtitleText} >
                We care about your security. Just enter your email here and we'll help you recovering your password
            </Text>
            <CustomInput
                myPlaceholder="Type your email"
                myOnChangeText={(text) => setEmail(text)}
            />
            <CustomButton
                name="Send Email"
                myOnPress={() => reset()} />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    subtitleText: {
        fontStyle: 'normal',
        color: 'black',
        alignSelf: 'center',
        fontSize: 15,
        padding: 15,
    },
    image: {
        height: 200,
        width: 200,
        alignSelf: 'center',
        borderRadius: 60
    },


});

export default Forgot