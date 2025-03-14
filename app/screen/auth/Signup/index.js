import React from "react";
import styles from "./styles";

import { View, Image, Text } from "react-native";
const SignUp = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SignUp</Text>
    </View>
  );
};
export default React.memo(SignUp);
