import { StyleSheet } from "react-native";
import colors from "../../constants/color";

const styles = StyleSheet.create({
  itemContainer: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: colors.blue,
    marginRight: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  selectedItemContainer: {
    backgroundColor: colors.blue,
    borderColor: colors.blue,
  },
  itemText: {
    fontSize: 13,
    fontWeight: "600",
    color: colors.blue,
    textTransform: "capitalize",
  },
  selectedItemText: {
    color: "#fff",
  },
});

export default styles;
