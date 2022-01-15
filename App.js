import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AppService from "./src/AppService";
import HomePage from "./src/pages/HomePage";

export default function App() {
  return (
    <View style={styles.container}>
      <AppService />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#333",
    alignItems: "center",
    justifyContent: "center",
  },
});
