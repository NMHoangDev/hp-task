import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

const Button = ({ onPress, type = "primary", children, style }) => {
  const containerStyle = [
    styles.container,
    type === "blue" && styles.blueBg,
    type === "outline" && styles.outline,
    style,
  ];

  const textStyle = [styles.text, type === "outline" && styles.outlineText];

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.85}
      style={containerStyle}
    >
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

export default React.memo(Button);
