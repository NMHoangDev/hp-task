import { StyleSheet, Dimensions } from "react-native";
import colors from "../../../constants/color";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f4f8", // nền vẫn giữ sạch
  },
  listContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 120,
  },
  listHeader: {
    marginBottom: 28,
  },
  taskCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    paddingVertical: 22,
    paddingHorizontal: 22,
    borderRadius: 24,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: "rgba(226, 232, 240, 0.5)", // border glass mờ mờ
    shadowColor: "#60a5fa", // xanh dương nhạt
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.12,
    shadowRadius: 10,
    elevation: 6,
  },
  taskCardChecked: {
    backgroundColor: "#bbf7d0", // xanh mint pastel đậm hơn
    borderColor: "rgba(110, 231, 183, 0.6)", // viền xanh glass
    shadowColor: "#34d399",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.18,
    shadowRadius: 12,
    elevation: 8,
  },
  taskText: {
    flex: 1,
    fontSize: 20,
    fontWeight: "800",
    color: "#1e293b", // xanh navy đậm rất điệu nghệ
    marginLeft: 16,
    letterSpacing: 0.4,
  },
  taskTextChecked: {
    textDecorationLine: "line-through",
    color: "#64748b", // xanh xám trung tính rất designer
  },
});

export default styles;
