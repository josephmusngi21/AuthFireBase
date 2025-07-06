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
        <Text style={styles.textEnter}>Enter your details below</Text>
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
        <Button
          style={styles.submitButton}
          title="Login"
          onPress={handlePress}
        />
        <Text style={styles.textForgot}>Forgot your password?</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightblue",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignContent: "center",
    width: "80%",
    height: "60%",
    marginTop: 110,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  header: {
    backgroundColor: 'lightcoral',
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
  },
  textWelcome: {
    fontSize: 22,
    fontWeight: "700",
    letterSpacing: 0.65,
  },
  textEnter: {
    fontSize: 13,
    fontWeight: "400",
    letterSpacing: 0.35,
    marginTop: 3,
    color: "gray",
  },
  form: {
    backgroundColor: "lightgreen",
    height: 275,
    marginTop: 10,
    marginBottom: 10,
    paddingTop: 20,
    paddingBottom: 20,
  },
  input: {
    marginBottom: 20,
    paddingHorizontal: 16,
    gap: 12,
  },
  submitButton: {},
  textForgot: {},
});
