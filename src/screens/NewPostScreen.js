import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

// Component
import FormikPostUploader from "../components/FormikPostUploader";

const NewPostScreen = () => {
  return (
    <View style={styles.container}>
      <FormikPostUploader />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
  },
});

export default NewPostScreen;
