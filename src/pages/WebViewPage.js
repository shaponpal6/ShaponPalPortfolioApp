import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Button } from "react-native";
import PressableButton from "../components/Button/Pressable";
import { WebView } from "react-native-webview";
import Constants from "expo-constants";

const WebViewPage = (props) => {
  return (
    <SafeAreaView style={styles.main}>
      {
        // <Button
        //   onPress={() => props.setMenu("home")}
        //   title="<"
        //   accessibilityLabel="Home"
        //   style={styles.backButton}
        // />
      }
      <WebView style={styles.container} source={{ uri: "https://shapon.me" }} />
    </SafeAreaView>
  );
};

export default WebViewPage;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    // width: "100%",
  },
  container: {
    flex: 1,
    // marginTop: Constants.statusBarHeight,
    // width: "100%",
  },
  backButton: {
    position: "absolute",
    display: "flex",
    width: 20,
    height: 20,
    left: 10,
    top: 90,
  },
});
