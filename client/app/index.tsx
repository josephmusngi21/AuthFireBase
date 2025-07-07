import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";

import Login from "../components/pages/Login/Login";
import Register from "../components/pages/Register/Register";

export default function Index() {
  const [isLogin, setIsLogin] = useState(true);

  return <View style={styles.container}>
    {isLogin ? <Login /> : <Register />}
    <TouchableOpacity
      style={{
        marginTop: 20,
        padding: 10,
        backgroundColor: "#007bff",
        borderRadius: 5,
      }}
      onPress={() => setIsLogin((prev) => !prev)}
    >
      <Text style={{ color: "#fff" }}>
        {isLogin ? "Go to Register" : "Go to Login"}
      </Text>
    </TouchableOpacity>
  </View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
});
