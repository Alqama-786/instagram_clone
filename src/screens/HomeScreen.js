import * as React from "react";
import { StyleSheet, View, ScrollView } from "react-native";

// Components
import Header from "../components/Header";
import Stories from "../components/Stories";
import Post from "../components/Post";
import BottomTabs from "../components/BottomTabs";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <Stories />
        <Post />
      </ScrollView>
      <BottomTabs />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 35,
    backgroundColor: "black",
    height: "100%",
    position: "relative",
    width: "100%",
  },
});

export default HomeScreen;
