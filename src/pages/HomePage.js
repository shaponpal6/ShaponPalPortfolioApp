import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
} from "react-native";
import PressableButton from "../components/Button/Pressable";

const HomePage = (props) => {
  const aboutMeButtonPressHandler = () => {
    console.log(`click`);
    props.setMenu("main");
  };
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={{ flex: 1 }}
        //We are using online image to set background
        source={{
          uri: "https://raw.githubusercontent.com/AboutReact/sampleresource/master/crystal_background.jpg",
        }}
        //You can also set image from your project folder
        //require('./images/background_image.jpg')        //
      >
        <View style={styles.container}>
          <View style={styles.centerContentStyle}>
            <Text style={styles.titleStyle}>Hello</Text>
            <Text style={styles.titleStyle}>I'm Shapon Pal</Text>
            <Text style={styles.titleStyle}>Senior Software Developer</Text>
            <Image
              source={{
                uri: "https://raw.githubusercontent.com/AboutReact/sampleresource/master/logosmalltransparen.png",
              }}
              style={{ width: 40, height: 40, marginTop: 90 }}
            />
            <Text style={styles.TextStyle}>About Me</Text>
            <PressableButton
              title="About Me"
              onPress={aboutMeButtonPressHandler}
            />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  titleStyle: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
  },
  centerContentStyle: {
    justifyContent: "center",
    alignItems: "center",
  },
});
