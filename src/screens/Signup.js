import { View, Text, Button, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
import { useState } from 'react'
import { addDoc, getFirestore, collection, getDoc, setDoc, doc } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from '../Firebase';
import CustomButton from '../components/CustomButton';
import CustomInput from '../components/CustomInput';

const Signup = (props) => {
    const auth = getAuth(app);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState("");

    const db = getFirestore(app);

    const onSignupPressed = () => {
        try {
            if (password == confirmPass) {
                createUserWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {
                        // Signed in with email and password
                        const user = userCredential.user;
                        // ...
                        alert("User created");
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        // ..
                        alert(errorMessage);
                    });
            } else {
                alert("Both Password not matched!")
            }
        } catch (error) {
            alert("Something bad happened")
        }
    }
    return (
        <ScrollView>
            <View style={styles.container} >
                <Image
                    source={require('../../assets/signup.jpg')}
                    style={styles.image} />
                <Text style={styles.titleText} >
                    Let's Join
                </Text>
                <Text style={styles.subtitleText}>
                    Account creation in a few Taps
                </Text>
                <CustomInput
                    placeholder="First Name"
                    onChangeText={(text) => setFirstName(text)} />
                <CustomInput
                    placeholder="Last Name"
                    onChangeText={(text) => setLastName(text)} />
                <CustomInput
                    placeholder="Email"
                    onChangeText={(text) => setEmail(text)} />
                <CustomInput
                    placeholder="Password"
                    secureTextEntry={true}
                    onChangeText={(text) => setPassword(text)} />
                <CustomInput
                    placeholder="Re-enter Password"
                    secureTextEntry={true}
                    onChangeText={(text) => setConfirmPass(text)} />

                {/* Forgot Password */}
                <View style={{ flexDirection: 'row' }} >
                    <TouchableOpacity
                        style={styles.loginInstead}
                        onPress={() => props.navigation.navigate('Login')} >
                        <Text style={{ fontWeight: 'bold', color: '#008000' }} >
                            Login instead!
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

                {/* Button to call a function for Account Creation*/}
                <CustomButton
                    name="Signup"
                    onPress = {() => onSignupPressed()} />
            </View>
        </ScrollView>
    )
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 5
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
        marginBottom: 7,
        marginRight: 5,
        marginLeft: 5,
    },
    placeLeft: {
        fontWeight: 'light',
        color: '#4b4df8',
        marginRight: 15,
        paddingBottom: 10,
        paddingLeft: 10,
    },
    placeCenter: {
        color: '#4b4df8',
        paddingLeft: 10,
        // position: 'absolute',
        // bottom: -50

    },
    text: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 70,

    },
    bottomButton: {
        backgroundColor: '#4b4df8',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        width: '95%',
        alignSelf: 'center',
        padding: 15,
        margin: 15,
    },
    notesText: {
        fontSize: 18,
    },
    viewContainer: {
        backgroundColor: 'grey',
        borderRadius: 15,
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
        alignSelf: 'center',
        marginTop: 30
    }
});

export default Signup;