import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlePress = () => {
    setEmail("");
    setPassword("");
    if (email.trim() === "" || password.trim() === "") {
      alert("Please fill in both fields.");
      console.log(
        "Login pressed with email:",
        email,
        "and password:",
        password
      );
    }
  };

  return (
    <View style={[styles.screen, { justifyContent: "flex-end" }]}>
      <View style={[styles.container, { height: "80%" }]}>
        <View style={styles.header}>
          <Text style={styles.textWelcome}>Welcome Back</Text>
          <Text style={styles.textEnter}>Enter your details below</Text>
        </View>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Enter Email/Phone No."
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Enter Password"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity style={styles.submitButton} onPress={handlePress}>
            <Text style={styles.submitButtonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.textForgot}>Forgot your password?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#eaf6fb",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  container: {
    backgroundColor: "#fff",
    width: "100%",
    borderRadius: 20,
    padding: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 6,
  },
  header: {
    alignItems: "center",
    marginBottom: 24,
  },
  textWelcome: {
    fontSize: 24,
    fontWeight: "700",
    letterSpacing: 0.65,
    color: "#222",
  },
  textEnter: {
    fontSize: 14,
    fontWeight: "400",
    letterSpacing: 0.35,
    marginTop: 6,
    color: "gray",
  },
  form: {
    width: "100%",
  },
  input: {
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    paddingHorizontal: 17,
    paddingVertical: 12,
    fontSize: 15,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    color: 'grey',
  },
  submitButton: {
    backgroundColor: "#3b82f6",
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: "center",
    marginBottom: 12,
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 0.5,
  },
  textForgot: {
    color: "#3b82f6",
    textAlign: "center",
    marginTop: 4,
    textDecorationLine: "underline",
    fontSize: 14,
  },
});
