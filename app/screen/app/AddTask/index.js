import moment from "moment";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import Button from "../../../components/Button";
import Categories from "../../../components/Categories";
import DateInput from "../../../components/DateInput";
import Input from "../../../components/Input";
import Title from "../../../components/Title";
import { categories } from "../../../constants/categories";
import styles from "./styles";
import { API_URL } from "../../../utils/url";
import Home from "../Home";
import { setToUpdate } from "../../../store/task";
import { useDispatch } from "react-redux";

const AddTask = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState();
  const [deadline, setDeadline] = useState(new Date());
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleBack = () => navigation.goBack();
  const createTask = async (taskData) => {
    try {
      const response = await fetch(`${API_URL}/api/task/create-task`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(taskData),
      });

      if (!response.ok) {
        throw new Error("Failed to create task");
      }

      const data = await response.json();
      console.log("Task created:", data);
      dispatch(setToUpdate());
      Alert.alert("Success", "Task created successfully!");
      return data;
    } catch (error) {
      console.error("Error:", error);
      Alert.alert("Error", "Failed to create task");
    }
  };

  const onSubmit = async () => {
    const today = moment().format("YYYY-MM-DD");
    const deadlineFormatted = moment(deadline).format("YYYY-MM-DD");

    if (!title) {
      Alert.alert("⚠️ Please enter the task title");
      return;
    }
    if (moment(deadlineFormatted).isBefore(today)) {
      Alert.alert("⚠️ Please enter a future date");
      return;
    }

    setLoading(true);

    console.log(title, category, deadline, API_URL);
    await createTask({
      name: title,
      type: category,
      userId: 1,
      deadline: deadline,
      groupId: null,
    });
    setLoading(false);

    await navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled"
        >
          <Pressable style={styles.backContainer} onPress={handleBack}>
            <Image
              style={styles.backIcon}
              source={require("../../../../assets/images/back.png")}
            />
          </Pressable>

          <Title type="thin">Add New Task</Title>

          <View style={styles.field}>
            <Text style={styles.label}>Describe the task</Text>
            <Input
              value={title}
              onChangeText={setTitle}
              outlined
              placeholder="Type here..."
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Task Type</Text>
            <Categories
              categories={categories}
              selectedCategory={category}
              onCategoryPress={setCategory}
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Deadline</Text>
            <DateInput value={deadline} onChange={setDeadline} />
          </View>

          <View style={styles.buttonContainer}>
            {loading ? (
              <ActivityIndicator size="small" color="#4a90e2" />
            ) : (
              <Button type="blue" onPress={onSubmit}>
                Add the Task
              </Button>
            )}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default React.memo(AddTask);
