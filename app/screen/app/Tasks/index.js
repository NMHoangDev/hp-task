import React, { useState, useEffect, useRef } from "react";
import { FlatList, SafeAreaView, View, Text } from "react-native";
import Header from "../../../components/Header";
import PlusIcon from "../../../components/PlusIcon";
import Title from "../../../components/Title";
import styles from "./styles";
import Checkbox from "../../../components/Checkbox";
import { setToUpdate } from "../../../store/task";
import { useDispatch, useSelector } from "react-redux";
import Categories from "../../../components/Categories";
import { categories } from "../../../constants/categories";
import { TouchableOpacity } from "react-native";

const Tasks = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.data);
  const [category, setCategory] = useState("all");
  const [filteredTasks, setFilteredTasks] = useState([]);

  useEffect(() => {
    if (category && category !== "all") {
      const filtered = tasks?.filter((task) => task?.type === category);
      setFilteredTasks(filtered);
    } else {
      setFilteredTasks(tasks);
    }
  }, [category, tasks]);

  const onTaskUpdate = (item) => {
    // firestore logic update (giữ nguyên)
  };

  const renderTask = ({ item }) => {
    const handlePress = () => {
      onTaskUpdate(item);
    };

    return (
      <TouchableOpacity activeOpacity={0.7} onPress={handlePress}>
        <View style={[styles.taskCard, item.checked && styles.taskCardChecked]}>
          <Checkbox checked={item.checked} onPress={handlePress} />
          <Text
            style={[styles.taskText, item.checked && styles.taskTextChecked]}
          >
            {item.name}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Tasks" />
      <FlatList
        ListHeaderComponent={
          <View style={styles.listHeader}>
            <Title type="thin">To Do Tasks</Title>
            <Categories
              categories={[{ label: "All", value: "all" }, ...categories]}
              selectedCategory={category}
              onCategoryPress={setCategory}
            />
          </View>
        }
        contentContainerStyle={styles.listContainer}
        data={filteredTasks}
        renderItem={renderTask}
        keyExtractor={(item) => String(item?.id)}
      />
      <PlusIcon />
    </SafeAreaView>
  );
};

export default React.memo(Tasks);
