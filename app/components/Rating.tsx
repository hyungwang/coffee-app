import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AppColors } from "../utils/colors";
export const Rating = ({ rating }: { rating: Number }) => {
  return (
    <View style={{ flexDirection: "row", paddingVertical: 16 }}>
      {Array(5)
        .fill(0)
        .map((_, index) => (
          <Ionicons
            name={"star"}
            style={{
              color: index < rating ? AppColors.brown : "rgba(83, 49, 40, 0.2)",
              fontSize: 24,
              paddingRight: 4,
            }}
          />
        ))}
    </View>
  );
};
