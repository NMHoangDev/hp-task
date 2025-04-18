import React from "react";
import styles from "./styles";
import Button from "../../../components/Button/index";
import { View, Image, Text } from "react-native";
import { navigate } from "expo-router/build/global-state/routing";
const Onboarding = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../../../assets/images/onboarding.png")}
      />
      <View style={styles.content}>
        <Text style={styles.title}>Best task management app</Text>
        <Text style={styles.subtitle}>
          Get organized by sorting out all your task and boots your activity
        </Text>
        <Button
          onPress={() => {
            navigation.navigate("SignIn");
          }}
        >
          Log In
        </Button>
        <Button
          onPress={() => {
            navigation.navigate("SignUp");
          }}
          type={"blue"}
        >
          Get Started
        </Button>
      </View>
    </View>
  );
};
export default React.memo(Onboarding);
