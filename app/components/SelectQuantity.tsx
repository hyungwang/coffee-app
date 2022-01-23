import { Text, TouchableOpacity, View } from "react-native";
import { AppColors } from "../utils/colors";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { AppFonts } from "../utils/fonts";
interface Props {
  initial?: number;
  onChange?: (value: number) => void;
}
export const SelectQuantity = ({ initial, onChange }: Props) => {
  const [quantity, setQuantity] = useState(initial ?? 0);
  const handleChange = (type: "increment" | "decrement") => {
    const newQuantity = type === "increment" ? quantity + 1 : quantity - 1;
    if (newQuantity >= 0) {
      setQuantity(newQuantity);
      onChange?.(newQuantity);
    }
  };
  return (
    <View>
      <Text
        style={{
          fontSize: 20,
          color: AppColors.brown,
          marginBottom: 10,
          fontFamily: AppFonts.PlayfairDisplay_500,
        }}
      >
        Amount
      </Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity onPress={() => handleChange("decrement")}>
          <Ionicons
            name={
              quantity > 0 ? "ios-remove-circle" : "ios-remove-circle-outline"
            }
            style={{ fontSize: 40, color: AppColors.brown }}
          />
        </TouchableOpacity>
        <Text
          style={{
            paddingHorizontal: 10,
            fontWeight: "400",
            fontSize: 24,
            color: AppColors.brown,
            fontFamily: AppFonts.Montserrat_400,
          }}
        >
          {quantity}
        </Text>
        <TouchableOpacity onPress={() => handleChange("increment")}>
          <Ionicons
            name="ios-add-circle"
            style={{ fontSize: 40, color: AppColors.brown }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
