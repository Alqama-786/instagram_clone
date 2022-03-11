import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

// Data
import { bottomTabIcons } from "../api/data.json";

const BottomTabs = () => {
  return (
    <View style={styles.container}>
      {bottomTabIcons.map((item, index) => {
        return (
          <TouchableOpacity key={index}>
            <View style={styles.tab}>
              <Image
                style={styles.tabIcon}
                source={{
                  uri: item.inactive,
                }}
              />
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
    paddingHorizontal: 13,
    borderWidth: 1.3,
    borderTopColor: "#fff",
    marginBottom: 30,
  },
  tab: {
    alignItems: "center",
    justifyContent: "center",
  },
  tabIcon: {
    width: 33,
    height: 33,
    resizeMode: "contain",
    borderRadius: 200,
  },
});

export default BottomTabs;
