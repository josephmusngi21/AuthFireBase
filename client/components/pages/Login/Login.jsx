import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlePress = () => {
    console.log("Login pressed with email:", email, "and password:", password);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textWelcome}>Welcome Back</Text>
        <Text style={styles.textInput}>Enter your details below</Text>
      </View>
      <View style={styles.form}>
        <View style={styles.input}>
          <TextInput
            placeholder="Enter Email/Phone No."
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            placeholder="Enter Password"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <Button style={styles.submitButton} title="Login" onPress={handlePress} />
        <Text style={styles.textForgot}>Forgot your password?</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightblue',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignContent: 'center',
    width: '80%',
    height: '60%',
    marginTop: 110,
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textWelcome: {

  },
  textInput: {

  },
  form: {

  },
  input: {

  },
  submitButton: {

  },
  textForgot: {
    
  }
});
