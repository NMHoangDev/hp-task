import { StyleSheet } from "react-native";
import colors from "../../../constants/color.js";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 24,
    paddingTop: 30,
  },
  footerText: {
    color: colors.grey,
    fontSize: 15,
    textAlign: "center",
    marginTop: 28,
  },
  footerLink: {
    color: colors.purple,
    fontWeight: "bold",
  },
});

export default styles;
