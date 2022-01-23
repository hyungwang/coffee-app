import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import DetailScreen from "./app/screens/DetailScreen";
import HomeScreen from "./app/screens/HomeScreen";
import AppLoading from "expo-app-loading";
import {
  Montserrat_400Regular,
  Montserrat_700Bold,
  Montserrat_600SemiBold,
} from "@expo-google-fonts/montserrat";
import {
  PlayfairDisplay_400Regular,
  PlayfairDisplay_500Medium,
  PlayfairDisplay_700Bold,
} from "@expo-google-fonts/playfair-display";
import { useFonts } from "expo-font";
import { AppFonts } from "./app/utils/fonts";
export type RootStackParamList = {
  Home: undefined;
  Detail: { id: string };
};
const Stack = createNativeStackNavigator<RootStackParamList>();
export default function App() {
  const [fontsLoaded] = useFonts({
    [AppFonts.Montserrat_400]: Montserrat_400Regular,
    [AppFonts.Montserrat_700]: Montserrat_700Bold,
    [AppFonts.Montserrat_600]: Montserrat_600SemiBold,
    [AppFonts.PlayfairDisplay_400]: PlayfairDisplay_400Regular,
    [AppFonts.PlayfairDisplay_500]: PlayfairDisplay_500Medium,
    [AppFonts.PlayfairDisplay_700]: PlayfairDisplay_700Bold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Detail"
            component={DetailScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
  },
});
