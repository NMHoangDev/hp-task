import { StyleSheet } from "react-native";
import colors from "../../../constants/color";
import { Dimensions } from "react-native";
const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    marginHorizontal: 30,
  },
  image: {
    width: "100%",
    flex: 1,
  },
  content: {
    padding: 46,
    paddingTop: 0,
    backgroundColor: colors.white,
    width: width,
  },
  title: {
    color: colors.black,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 22,
    paddingTop: 40,
  },
  subtitle: {
    fontSize: 15,
    color: colors.grey,
    textAlign: "center",
    marginVertical: 16,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    height: 50,
    width: "100%",
    backgroundColor: colors.white,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  footerLink: {
    color: colors.purple,
    fontWeight: "bold",
  },
  conditionContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  condition: {
    color: colors.midGrey,
    fontSize: 12,
    marginLeft: 6,
  },
  subCondition: {
    color: colors.midGrey,
    textDecorationLine: "underline",
    fontSize: 12,
  },
});

export default styles;
