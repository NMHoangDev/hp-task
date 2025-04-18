import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import Header from "../../../components/Header/index";
import PlusIcon from "../../../components/PlusIcon/index";
import Title from "../../../components/Title";
import styles from "./styles";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Home" />

      <ScrollView>
        <Title type="thin">Daily Tasks:</Title>
      </ScrollView>

      <PlusIcon />
    </SafeAreaView>
  );
};

export default React.memo(Home);
