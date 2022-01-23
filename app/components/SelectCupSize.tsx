import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import App from "../../App";
import { AppColors } from "../utils/colors";
import { AppFonts } from "../utils/fonts";

interface Props {
  initial?: "s" | "m" | "l";
  onChange?: (value: "s" | "m" | "l") => void;
}

export const SelectCupSize = ({ initial, onChange }: Props) => {
  const [size, setSize] = useState(initial ?? "s");
  const handleChange = (type: "s" | "m" | "l") => {
    setSize(type);
    onChange?.(type);
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
        Cup Size
      </Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {(["s", "m", "l"] as Array<typeof size>).map((type) => (
          <TouchableOpacity
            key={type}
            onPress={() => handleChange(type)}
            style={{
              height: 40,
              width: 40,
              borderRadius: 20,
              borderWidth: 1,
              borderColor: AppColors.brown,
              backgroundColor: type === size ? AppColors.brown : "white",
              marginRight: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 18,
                lineHeight: 35,
                color: type === size ? "#fff" : AppColors.brown,
                fontFamily: AppFonts.Montserrat_600,
              }}
            >
              {type.toUpperCase()}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};
