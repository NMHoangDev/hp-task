import React, { useState } from "react";
import { SafeAreaView, Text } from "react-native";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Title from "../../../components/Title";
import styles from "./styles";

const SignIn = ({ navigation }) => {
  const [values, setValues] = useState({});
  const onChange = (value, key) => {
    setValues((vals) => {
      return {
        ...vals,
        [key]: value,
      };
    });
  };
  const register = async (values) => {
    try {
      const response = await fetch("http://192.168.1.11:8989/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (response.ok) {
        await AsyncStorage.removeItem("sessionToken");
        await AsyncStorage.setItem("sessionToken", data.token);

        Alert.alert(data.message);

        navigation.reset({
          index: 0,
          routes: [{ name: "Home" }],
        });
      } else {
        Alert.alert(data.message);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Title>Welcome back!</Title>

      <Input
        placeholder="Email"
        keyboardType="email-address"
        onChangeText={(val) => {
          onChange(val, "email");
        }}
      />
      <Input
        placeholder="Password"
        secureTextEntry
        onChangeText={(val) => {
          onChange(val, "password");
        }}
      />

      <Button>Login</Button>

      <Text style={styles.footerText}>
        Not Registered?
        <Text
          onPress={() => {
            navigation.navigate("SignUp");
          }}
          style={styles.footerLink}
        >
          Sign up!
        </Text>
      </Text>
    </SafeAreaView>
  );
};

export default React.memo(SignIn);
