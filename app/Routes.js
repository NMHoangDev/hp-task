import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Image, StyleSheet } from "react-native";
import Onboarding from "./screen/auth/Onboarding/index";
import Signin from "./screen/auth/Signin/index";
import Signup from "./screen/auth/Signup/index";
import Home from "./screen/app/Home/index";
import Tasks from "./screen/app/Tasks/index";
import AddTask from "./screen/app/AddTask/index";
import DrawerContent from "./components/DrawerTab/index";
import { useDispatch } from "react-redux";
import { setUser } from "./store/user";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const Routes = () => {
  const [userDefault, setUserDefault] = useState({
    name: "Nguyen Minh Hoang",
    id: 1,
  });
  const dispatch = useDispatch();
  function onAuthStateChanged(user) {
    dispatch(setUser(user));
  }

  useEffect(() => {
    onAuthStateChanged(userDefault);
  }, []);
  const Tabs = () => (
    <Tab.Navigator
      screenOptions={{ tabBarShowLabel: false, headerShown: false }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              style={styles.icon}
              source={
                focused
                  ? require("../assets/images/home_active.png")
                  : require("../assets/images/home_inactive.png")
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Tasks"
        component={Tasks}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              style={styles.icon}
              source={
                focused
                  ? require("../assets/images/calendar_active.png")
                  : require("../assets/images/calendar_inactive.png")
              }
            />
          ),
        }}
      />
    </Tab.Navigator>
  );

  if (userDefault) {
    return (
      <Drawer.Navigator
        screenOptions={{ headerShown: false }}
        drawerContent={(props) => <DrawerContent {...props} />}
      >
        <Drawer.Screen name="Tabs" component={Tabs} />
        <Drawer.Screen name="AddTask" component={AddTask} />
      </Drawer.Navigator>
    );
  }

  // Code này sẽ không bao giờ chạy nếu luôn có user
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

export default React.memo(Routes);
