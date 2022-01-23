import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { AppColors } from "../utils/colors";
import { coffeeData } from "../utils/data";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
import { AppFonts } from "../utils/fonts";

export default function HomeScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View
      style={{
        flex: 1,
        paddingTop: 30,
        backgroundColor: "#fff",
      }}
    >
      <View
        style={{
          flex: 1,
        }}
      >
        <View style={styles.iconWrapper}>
          <Ionicons name="ios-menu-outline" style={styles.icon} />
          <Ionicons name="notifications-outline" style={styles.icon} />
        </View>
        <ScrollView style={{ paddingHorizontal: 20 }}>
          <Text style={styles.title}>Our coffee</Text>
          <Text style={styles.description}>
            Ornare vulputate varius mauris sit. Nibh sit ut ut id sapien
            maecenas eget odio quis. Consequat aenean ut semper quam sed proin.
          </Text>
          <View style={styles.coffeeWrapper}>
            {coffeeData.map((coffee) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Detail", {
                    id: coffee.name,
                  })
                }
                style={styles.coffeeContainer}
                key={coffee.name}
              >
                <Image
                  style={styles.coffeeImage}
                  source={{ uri: coffee.image }}
                />
                <Text style={styles.coffeeText}>{coffee.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    fontSize: 40,
    color: AppColors.brown,
  },
  iconWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 20,
    marginTop: 20,
  },
  title: {
    fontSize: 40,
    color: AppColors.brown,
    fontWeight: "bold",
    fontFamily: AppFonts.PlayfairDisplay_700,
  },
  description: {
    fontSize: 16,
    color: AppColors.brown,
    marginTop: 20,
    fontFamily: AppFonts.Montserrat_400,
  },
  coffeeWrapper: {
    marginTop: 40,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  coffeeContainer: {
    width: "45%",
    marginBottom: 25,
  },
  coffeeImage: {
    width: 124,
    height: 148,
    backgroundColor: "gray",
    borderRadius: 16,
    marginBottom: 10,
  },
  coffeeText: {
    fontSize: 16,
    fontWeight: "bold",
    color: AppColors.brown,
    fontFamily: AppFonts.Montserrat_700,
  },
});
