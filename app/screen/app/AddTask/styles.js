import { StyleSheet, Dimensions, Platform } from "react-native";
import colors from "../../../constants/color";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f8fa", // màu nền nhẹ hiện đại
  },
  backContainer: {
    padding: 10,
    alignSelf: "flex-start",
  },
  backIcon: {
    width: 24,
    height: 24,
    tintColor: "#333", // đồng bộ với theme
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  field: {
    marginBottom: 20,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#555",
    marginBottom: 10,
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: "center",
  },
});

export default styles;
