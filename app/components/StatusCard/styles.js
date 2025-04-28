import { StyleSheet } from "react-native";
import colors from "../../constants/color";

const getStyles = (type) =>
  StyleSheet.create({
    container: {
      backgroundColor: type === "error" ? "#fee2e2" : "#e0f2fe",
      borderColor: type === "error" ? "#f87171" : "#38bdf8",
      borderWidth: 1.5,
      borderRadius: 20,
      paddingVertical: 18,
      paddingHorizontal: 14,
      alignItems: "center",
      justifyContent: "center",
      flex: 1,
      marginHorizontal: 6,
      minHeight: 120,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.08,
      shadowRadius: 6,
      elevation: 4,
    },
    label: {
      marginBottom: 8,
      fontSize: 14,
      fontWeight: "600",
      color: type === "error" ? "#dc2626" : "#0ea5e9", // Text đỏ đậm hoặc xanh dương đậm
      textAlign: "center",
    },
    count: {
      fontSize: 32,
      fontWeight: "800",
      color: type === "error" ? "#dc2626" : "#0ea5e9",
      textAlign: "center",
    },
  });

export default getStyles;
