import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useMemo } from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import App, { RootStackParamList } from "../../App";
import { coffeeData } from "../utils/data";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { Rating } from "../components/Rating";
import { SelectCupSize } from "../components/SelectCupSize";
import { SelectQuantity } from "../components/SelectQuantity";
import { AppColors } from "../utils/colors";
import { AppFonts } from "../utils/fonts";
export default function DetailScreen() {
  const route = useRoute<RouteProp<RootStackParamList, "Detail">>();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const coffee = useMemo(
    () => coffeeData.find((coffee) => coffee.name === route.params.id),
    [route]
  );
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="light" />
      <ImageBackground
        source={{ uri: coffee?.image }}
        style={styles.imageWrapper}
        imageStyle={{
          borderBottomLeftRadius: 24,
          borderBottomRightRadius: 24,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 24,
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="ios-arrow-back" style={styles.icon} />
          </TouchableOpacity>
          <Ionicons name="notifications-outline" style={styles.icon} />
        </View>
      </ImageBackground>
      <View style={{ flex: 1, padding: 24 }}>
        <Text style={styles.title}>{coffee?.name}</Text>
        <Rating rating={coffee?.rating ?? 0} />
        <Text style={styles.description}>{coffee?.description}</Text>
        <View
          style={{
            flexDirection: "row",
            marginTop: 24,
            justifyContent: "space-between",
          }}
        >
          <SelectCupSize />
          <SelectQuantity />
        </View>
        <View style={{ flex: 1, justifyContent: "flex-end", marginBottom: 40 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: 16,
                  color: AppColors.brown,
                  fontFamily: AppFonts.PlayfairDisplay_400,
                }}
              >
                Total Price
              </Text>
              <Text
                style={{
                  fontSize: 32,
                  color: AppColors.brown,
                  fontWeight: "600",
                }}
              >
                $18
              </Text>
            </View>
            <TouchableOpacity style={styles.orderButton}>
              <Text style={styles.orderButtonText}>Order Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageWrapper: {
    height: 320,
    justifyContent: "flex-end",
  },
  icon: {
    fontSize: 40,
    color: "white",
  },
  title: {
    fontSize: 40,
    fontWeight: "700",
    color: AppColors.brown,
    fontFamily: AppFonts.PlayfairDisplay_700,
  },
  description: {
    fontWeight: "400",
    fontSize: 14,
    color: AppColors.brown,
    fontFamily: AppFonts.Montserrat_400,
  },
  orderButton: {
    backgroundColor: AppColors.brown,
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 30,
  },
  orderButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: AppFonts.Montserrat_700,
  },
});
