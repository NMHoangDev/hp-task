import React, { useState } from "react";
import styles from "./styles";

import { Text, SafeAreaView, View, Linking, Alert } from "react-native";
import Title from "../../../components/Title";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import Checkbox from "../../../components/Checkbox";
import {
  PRIVACY_POLICY_LINK,
  TERMS_CONDITIONS_LINK,
} from "../../../constants/links";
import AsyncStorage from "@react-native-async-storage/async-storage";
const SignUp = ({ navigation }) => {
  const [agreed, setAgreed] = useState(false);
  const [values, setValues] = useState({});
  const register = async (values) => {
    try {
      const response = await fetch(
        "http://192.168.1.11:8989/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );

      const data = await response.json();

      if (response.ok) {
        await AsyncStorage.setItem("sessionToken", data.token);

        Alert.alert(data.message);

        navigation.reset({
          index: 0,
          routes: [{ name: "Home" }],
        });
      } else {
        Alert.alert(data.error);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };
  const onChange = (value, key) => {
    setValues((vals) => {
      return {
        ...vals,
        [key]: value,
      };
    });
  };
  const onSubmit = () => {
    if (
      !values.name ||
      !values.username ||
      !values.email ||
      !values.password ||
      !values.confirmPassword
    ) {
      Alert.alert("Please enter all values");
      return;
    } else if (values.password !== values.confirmPassword) {
      Alert.alert("Passwords do not match.");
      return;
    } else {
      register({
        name: values.name,
        email: values.email,
        password: values.password,
        username: values.username,
      });
    }
  };

  const onLinkPress = (url) => {
    Linking.openURL(url);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Title>Join the hub!</Title>
      <Input onChangeText={(val) => onChange(val, "name")} placeholder="Name" />
      <Input
        onChangeText={(val) => onChange(val, "username")}
        placeholder="Username"
      />
      <Input
        onChangeText={(val) => onChange(val, "email")}
        placeholder="Email"
        keyboardType="email-address"
      />
      <Input
        onChangeText={(val) => onChange(val, "password")}
        placeholder="Password"
        secureTextEntry
      />
      <Input
        onChangeText={(val) => onChange(val, "confirmPassword")}
        placeholder="Confirm Password"
        secureTextEntry
      />
      <View style={styles.conditionContainer}>
        <Checkbox checked={agreed} onPress={() => setAgreed(!agreed)} />
        <Text style={styles.condition}>
          I agree to{" "}
          <Text
            style={styles.subCondition}
            onPress={() => {
              onLinkPress(TERMS_CONDITIONS_LINK);
            }}
          >
            Terms and Condition
          </Text>
          and
          <Text
            style={styles.subCondition}
            onPress={() => {
              onLinkPress(PRIVACY_POLICY_LINK);
            }}
          >
            {" "}
            Privacy Policy{" "}
          </Text>
        </Text>
      </View>
      <Button
        type={"blue"}
        onPress={() => {
          onSubmit();
        }}
      >
        Create new account
      </Button>

      <Text style={styles.footerText}>
        Have you account?
        <Text
          onPress={() => {
            navigation.navigate("SignIn");
          }}
          style={styles.footerLink}
        >
          Sign In!
        </Text>
      </Text>
    </SafeAreaView>
  );
};
export default React.memo(SignUp);
