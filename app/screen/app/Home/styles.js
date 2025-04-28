import { StyleSheet, Dimensions } from "react-native";
import colors from "../../../constants/color";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background || "#f9f9f9", // thêm nền nhẹ đẹp
  },
  image: {
    width: "100%",
    flex: 1,
    resizeMode: "cover",
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 40,
    backgroundColor: colors.white,
    width: width,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  title: {
    color: colors.black,
    textAlign: "center",
    fontWeight: "700",
    fontSize: 24,
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    color: colors.grey,
    textAlign: "center",
    marginTop: 12,
    marginBottom: 24,
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 16,
  },
  box: {
    backgroundColor: colors.white,
    padding: 16,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    marginBottom: 24,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    height: 60,
    width: "100%",
    backgroundColor: colors.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
