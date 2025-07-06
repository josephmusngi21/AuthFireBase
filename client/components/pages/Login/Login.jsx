import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlePress = () => {
    // Handle login logic here
    console.log("Login pressed with email:", email, "and password:", password);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Login Page</Text>
        <Text>Hey, Enter your details to get sign in to your account</Text>
      </View>
      <View style={styles.form}>
        <View style={styles.input}>
          <TextInput placeholder="Enter Email/Phone No." />
          <TextInput placeholder="Enter Password" secureTextEntry={true} />
        </View>
        <Text>Having trouble in sign in?</Text>
        <Button onPress={handlePress()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
