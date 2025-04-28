import { StyleSheet } from "react-native";
import colors from "../../constants/color";

const styles = StyleSheet.create({
  title: {
    color: colors.black,
    fontSize: 28,
    fontWeight: "bold",
    paddingVertical: 24,
  },
  thin: {
    fontSize: 28,
    fontWeight: "300",
    color: colors.purple,
    paddingHorizontal: 10,
  },
});

export default styles;
