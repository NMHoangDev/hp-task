import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import Header from "../../../components/Header/index";
import PlusIcon from "../../../components/PlusIcon/index";
import Title from "../../../components/Title";
import styles from "./styles";
import { useSelector } from "react-redux";
import { API_URL } from "../../../utils/url";
import { useDispatch } from "react-redux";
import { setTasks } from "../../../store/task";
import StatusCard from "../../../components/StatusCard/index";
import moment from "moment";

const Home = () => {
  const tasks = useSelector((state) => state.tasks.data);
  const user = useSelector((state) => state.user.data);
  const toUpdate = useSelector((state) => state.tasks.toUpdate);
  const [counts, setCounts] = useState({});

  const dispatch = useDispatch();
  const fetchTask = async () => {
    try {
      const response = await fetch(`${API_URL}/api/task/get-all-task`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch tasks");
      }

      const data = await response.json();
      dispatch(setTasks(data));
      return data; // Trả về danh sách task
    } catch (error) {
      console.error("Error fetching tasks:", error);
      throw error;
    }
  };

  useEffect(() => {
    console.log(tasks);
    fetchTask();
  }, [user, toUpdate, dispatch]);

  useEffect(() => {
    if (tasks?.length) {
      const highPriority = tasks?.filter(
        (task) => task?.type === "urgent" || task?.type === "important"
      );
      const today = moment(new Date()).format("YYYY-MM-DD");
      const dueDeadline = tasks?.filter((task) => {
        const deadline = task?.deadline?.seconds * 1000;
        const deadlineFormatted = moment(deadline).format("YYYY-MM-DD");
        return moment(deadlineFormatted).isBefore(today);
      });
      const quickWin = tasks?.filter((task) => task?.type === "quick_task");

      setCounts({
        highPriority: highPriority?.length,
        dueDeadline: dueDeadline?.length,
        quickWin: quickWin?.length,
      });
    }
  }, [tasks]);

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Home" />

      <ScrollView>
        <Title type="thin">Daily Tasks:</Title>

        <View style={styles.row}>
          <StatusCard label="High Priority" count={counts?.highPriority} />
          <StatusCard
            label="Due Deadline"
            type="error"
            count={counts?.dueDeadline}
          />
          <StatusCard label="Quick Win" count={counts?.quickWin} />
        </View>

        <TouchableOpacity
          style={styles.box}
          onPress={() => navigation.navigate("Tasks")}
        >
          <Text style={styles.title}>Check all my tasks</Text>
          <Text style={styles.subtitle}>
            See all tasks and filter them by categories you have selected when
            creating them
          </Text>
        </TouchableOpacity>
      </ScrollView>

      <PlusIcon />
    </SafeAreaView>
  );
};

export default React.memo(Home);
