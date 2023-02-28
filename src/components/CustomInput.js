import { Text, TextInput, View, StyleSheet } from 'react-native';

export default function (props) {
  return (
    <TextInput
      placeholder={props.myPlaceholder}
      style={styles.input}
      secureTextEntry={props.mySecureTextEntry}
      onChangeText={(t) => props.myOnChangeText(t)}
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
    margin: 10,
  }
});