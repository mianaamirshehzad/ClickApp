import { Text, TextInput, View, StyleSheet } from 'react-native';

export default function CustomInput(props) {
  return (
    <TextInput
      placeholder={props.placeholder}
      style={styles.input}
      secureTextEntry={props.secureTextEntry}
      onChangeText={(t) => props.onChangeText(t)}
    />
  )
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#d3d3d3',
    // width: '90%',
    borderRadius: 15,
    height: 50,
    padding: 15,
    margin: 5
  }
});