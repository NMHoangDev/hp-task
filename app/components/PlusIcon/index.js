import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, Pressable, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import styles from "./styles";

const PlusIcon = () => {
  const navigation = useNavigation();

  const goToAddTask = () => {
    navigation.navigate("AddTask");
  };

  const goToAddGroup = () => {
    navigation.navigate("AddGroupTask");
  };

  return (
    <View style={styles.floatingWrapper}>
      <Pressable style={styles.fabSmall} onPress={goToAddGroup}>
        <Feather name="users" size={24} color="#fff" /> {/* hoặc chữ "G" */}
      </Pressable>

      <Pressable style={styles.fabMain} onPress={goToAddTask}>
        <Text style={styles.fabPlus}>+</Text>
      </Pressable>
    </View>
  );
};

export default React.memo(PlusIcon);
