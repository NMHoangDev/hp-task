import React from "react";
import {
  Alert,
  Linking,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import colors from "../../constants/color";
import {
  PRIVACY_POLICY_LINK,
  TERMS_CONDITIONS_LINK,
} from "../../constants/links";

function DrawerContent(props) {
  const { navigation } = props;

  const logout = () => {
    Alert.alert("Thông báo", "Đã đăng xuất");
  };

  const DrawerItem = ({ icon, label, onPress }) => (
    <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
      <View style={styles.item}>
        <Ionicons
          name={icon}
          size={20}
          color={colors.black}
          style={styles.icon}
        />
        <Text style={styles.label}>{label}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={styles.container}
    >
      {/* Avatar + Tên */}
      <View style={styles.profileSection}>
        <Image
          source={require("../../../assets/images/avatar.png")} // đổi thành avatar của bạn
          style={styles.avatar}
        />
        <Text style={styles.username}>Xin chào, Minh Hoàng</Text>
      </View>

      {/* Navigation Items */}
      <View style={styles.section}>
        <DrawerItem
          icon="home-outline"
          label="Home"
          onPress={() => navigation.navigate("Tabs", { screen: "Home" })}
        />
        <DrawerItem
          icon="calendar-outline"
          label="Tasks"
          onPress={() => navigation.navigate("Tabs", { screen: "Tasks" })}
        />
      </View>

      <View style={styles.section}>
        <DrawerItem
          icon="lock-closed-outline"
          label="Privacy Policy"
          onPress={() => Linking.openURL(PRIVACY_POLICY_LINK)}
        />
        <DrawerItem
          icon="document-text-outline"
          label="Terms & Conditions"
          onPress={() => Linking.openURL(TERMS_CONDITIONS_LINK)}
        />
      </View>

      <View style={styles.section}>
        <DrawerItem icon="log-out-outline" label="Log out" onPress={logout} />
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
  },
  profileSection: {
    alignItems: "center",
    marginBottom: 20,
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
    marginBottom: 8,
  },
  username: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.black,
  },
  section: {
    borderTopWidth: 1,
    borderTopColor: "#eee",
    paddingTop: 10,
    marginHorizontal: 15,
    marginBottom: 10,
  },
  itemContainer: {
    borderRadius: 8,
    marginVertical: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginHorizontal: 5,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 12,
  },
  label: {
    fontSize: 15,
    color: colors.black,
    fontWeight: "500",
  },
});

export default React.memo(DrawerContent);
