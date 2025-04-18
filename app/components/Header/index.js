import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";

const Header = ({ title }) => {
  const navigation = useNavigation();

  const openDrawer = () => {
    navigation.openDrawer();
  };

  return (
    <View style={styles.container}>
      {/* Nút mở menu */}
      <Pressable onPress={openDrawer} hitSlop={10} style={styles.menuButton}>
        <Image
          style={styles.icon}
          source={require("../../../assets/images/menu.png")}
        />
      </Pressable>

      {/* Tiêu đề ở giữa */}
      <Text style={styles.title} numberOfLines={1}>
        {title}
      </Text>

      {/* Placeholder icon bên phải để căn giữa tiêu đề */}
      <View style={styles.iconPlaceholder} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },
  menuButton: {
    padding: 4,
    borderRadius: 6,
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
  title: {
    flex: 1,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
  iconPlaceholder: {
    width: 24, // Để title nằm giữa, tạo ô trống bằng kích thước icon
  },
});

export default React.memo(Header);
