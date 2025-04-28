import { StyleSheet } from "react-native";
import colors from "../../constants/color";

const styles = StyleSheet.create({
  outlined: {
    marginVertical: 8,
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: "#fff",
    borderWidth: 1.2,
    borderColor: colors.grey,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2, // Android shadow
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: colors.blue,
    marginRight: 10,
  },
  text: {
    fontSize: 15,
    color: colors.textDark || "#333",
    fontWeight: "500",
  },
});

export default styles;
