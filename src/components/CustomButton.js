import { Text, View, TouchableOpacity, StyleSheet} from 'react-native';

export default function CustomButton (props) {
    return(
        <TouchableOpacity onPress={() => props.onPress()} 
        style = {styles.button}>
            {/* Spread Operators will help to add more styles than default ones  */}
                <Text style = {{...styles.buttonText, ...props.style}}>
                    {props.name}
                </Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#008000',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15, 
        width: '95%',
        alignSelf:'center',
        padding: 15,
        margin: 5,    
    }, 
    buttonText: {
        fontWeight: 'bold',
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 15,
        color: 'white'
    }, 

});