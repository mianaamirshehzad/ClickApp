import { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


import { storeUserLogin, retrieveUserLogin } from '../LocalStorage';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import app from '../Firebase';

const Login = (props) => {

    const auth = getAuth(app);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onLoginPress = () => {
        try {
            signInWithEmailAndPassword(auth, email, password)
                .then(userCredentials => {
                    const user = userCredentials.user;
                    console.log('Login with', user.email);
                    props.navigation.navigate('TaskScreen');
                })
                .catch(error => alert(error.message));
                storeUserLogin(email, password);
        } catch {
            alert('Email or Password is incorrect. Please retry!');
        }
    }

    return (
        <View style={styles.container} >
            
            <Image
                source={require('../../assets/login.jpg')}
                style={styles.image} />
            <Text style={styles.titleText}>
                Hello Again!
            </Text>
            <Text style={styles.subtitleText}>
                Welcome back. You've been missed!
            </Text>
            <CustomInput
                placeholder="Email"
                onChangeText={(text) => setEmail(text)} />
            <CustomInput
                placeholder="Password"
                onChangeText={(text) => setPassword(text)}
                secureTextEntry = {true} />


            <View style={{ flexDirection: 'row' }} >
                <TouchableOpacity
                    style={styles.loginInstead}
                    onPress={() => props.navigation.navigate('Signup')} >
                    <Text style={{ fontWeight: 'bold', color: '#008000' }} >
                        Register
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.forgotPassword}
                    onPress={() => props.navigation.navigate('Forgot')} >
                    <Text style={{ fontWeight: 'bold', color: '#008000' }} >
                        Forgot password?
                    </Text>
                </TouchableOpacity>
            </View>
            <CustomButton
                name="Login"
                onPress={() => onLoginPress()} />
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
        marginRight: 5,
        marginLeft: 5,
        paddingBottom: 5
    },
    placeCenter: {
        color: '#4b4df8',
        paddingLeft: 10,
        // position: 'absolute',
        // bottom: -50

    },
    forgotPassword: {
        padding: 8,
        alignItems: 'flex-end',
        marginLeft: 'auto',
        marginRight: 10
    },
    loginInstead: {
        padding: 8,
        alignItems: 'flex-start',
        marginRight: 'auto',
        marginLeft: 10
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 80,
        justifyContent: 'center',
        alignSelf: 'center'
    }
});


export default Login;