import { View, Text, Button, TextInput, Image, ScrollView, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import { useState } from 'react';
// import { getAuth, sendPasswordResetEmail } from "firebase/auth";

import CustomButton from '../components/CustomButton';
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
                source={require('../../assets/forgot.jpg')}
                style={styles.image} />
            <Text style={styles.titleText}>
                Forgot your password?
            </Text>
            <Text style={styles.subtitleText} >
                We care about your security. Just enter your email here and we'll help you recover your password
            </Text>
            <TouchableOpacity
                style={styles.loginInstead}
                onPress={() => props.navigation.navigate('Login')} >
                <Text style={{ fontWeight: 'bold', color: '#008000' }} >
                    Login
                </Text>
            </TouchableOpacity>
            <CustomInput
                placeholder="Type your email"
                onChangeText={(text) => setEmail(text)}
            />
            <CustomButton
                name="Send Email"
                onPress={() => reset()} />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    titleText: {
        fontStyle: 'normal',
        color: '#008000',
        alignSelf: 'center',
        fontSize: 25,
        padding: 10,
        marginTop: 10,
        marginBottom: 3,
        marginRight: 5,
        marginLeft: 5,
        fontWeight: 'bold'
    },
    subtitleText: {
        fontStyle: 'normal',
        color: 'black',
        alignSelf: 'center',
        fontSize: 15,
        padding: 15,
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 80,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    loginInstead: {
        // padding: 8,
        alignItems: 'flex-end',
        marginRight: 'auto',
        marginRight: 10
    },


});

export default Forgot