import { StyleSheet } from "react-native";
import colors from "../../constants/color";

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.purple,
    borderRadius: 3,
    height: 20,
    width: 20,
  },
  innerSquare: {
    width: 14,
    height: 14,
    backgroundColor: colors.purple,
    margin: 1,
  },
  checkedBox: {
    borderWidth: 2,
    borderColor: colors.white,
  },
});

export default styles;
