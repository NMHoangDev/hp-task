import React from "react";
import { SafeAreaView, ScrollView, Text } from "react-native";
import Header from "../../../components/Header/index";
import PlusIcon from "../../../components/PlusIcon/index";
import Title from "../../../components/Title/index";
import styles from "./styles";

const Tasks = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Tasks" />

      <ScrollView>
        <Title type="thin">To Do Tasks</Title>
      </ScrollView>

      <PlusIcon />
    </SafeAreaView>
  );
};

export default React.memo(Tasks);
