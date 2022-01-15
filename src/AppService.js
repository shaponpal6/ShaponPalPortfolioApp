import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import HomePage from "./pages/HomePage";
import WebViewPage from "./pages/WebViewPage";

const AppService = () => {
  const [page, setPage] = useState("home");
  return (
    <View style={styles.container}>
      {page === "home" && <HomePage setMenu={setPage} />}
      {page === "main" && <WebViewPage setMenu={setPage} />}
    </View>
  );
};

export default AppService;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
});
