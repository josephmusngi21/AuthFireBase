import React, { useState } from "react";
import {View, Text, TextInput, StyleSheet, TouchableOpacity} from "react-native";

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handlePress = () => {
        setEmail("");
        setPassword("");
        if (email.trim() === "" || password.trim() === "") {
            alert("Please fill in both fields.");
            console.log("Register pressed with email:", email, "and password:", password);
        }
        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            setPassword("");
            setConfirmPassword("");
            return;
        }
    }   


    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.textWelcome}>Get started free.</Text>
                <Text style={styles.textInfo}>Enter your details below to get started</Text>
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
                                <TextInput 
                    style={styles.input}
                    placeholder="Enter Password"
                    secureTextEntry={true}
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                />
                <TouchableOpacity style={styles.submitButton} onPress={handlePress}>
            <Text style={styles.submitButtonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.textForgot}>Forgot your password?</Text>
          </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {},
    header: {},
    textWelcome: {},
    textInfo: {},
    form: {},
    input: {},
    submitButton: {},
    submitButtonText: {},
    textForgot: {},
});