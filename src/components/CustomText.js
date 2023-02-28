import { Text, TextInput, View, StyleSheet } from 'react-native';

export default function (props) {
    return (
        <Text>
            {props.text}
        </Text>
    )
};

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#d3d3d3',
        // width: '90%',
        borderRadius: 15,
        height: 50,
        padding: 10,
        margin: 5,
    }
});