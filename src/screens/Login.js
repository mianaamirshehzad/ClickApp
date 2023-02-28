import { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = (props) => {

    // const auth = getAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onLoginPress = () => {
        try {
            signInWithEmailAndPassword(auth, email, password)
                .then(userCredentials => {
                    const user = userCredentials.user;
                    console.log('Login with', user.email);
                    // alert('Enter the Right E mail')
                    alert("Signin");
                    props.navigation.navigate("Tabs")
                })
                .catch(error => alert(error.message))
        } catch {
            alert('Email or Password is incorrect. Please retry!');
        }
    }

    return (
        <View style={styles.container} >
            <Text style={styles.titleText}>
                Hello Again!
            </Text>
            <Text style={styles.subtitleText}>
                Welcome back. You've been missed!
            </Text>
            <CustomInput
                myPlaceholder="Email"
                myOnChangeText ={(text) => setEmail(text)}
            />
            <CustomInput
                myPlaceholder="Password"
                mySecureTextEntry={true}
                myOnChangeText ={(text) => setPassword(text)}
            />
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
            {/* <View style={{ width: '90%', alignSelf: 'center', padding: 10 }}> */}

            <CustomButton
                name='Login'
                myOnPress = {() => onLoginPress()} />
        </View>

    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    titleText: {
        fontStyle: 'normal',
        color: '#008000',
        alignSelf: 'center',
        fontSize: 25,
        padding: 10,
        marginTop: 30,
        marginBottom: 5,
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
        // marginTop: 5,
        marginBottom: 7,
        marginRight: 5,
        marginLeft: 5,
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
});


export default Login;