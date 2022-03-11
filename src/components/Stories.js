import * as React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";

const Stories = () => {
  const [usersData, setUsersData] = React.useState([]);

  const getUserData = async () => {
    const response = await fetch("https://randomuser.me/api/?results=20");
    const data = await response.json();
    setUsersData(data.results);
  };

  const convertToCamelCase = (text) => {
    text = text.replace(/[-_\s.]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ""));
    return text.substr(0, 1).toLowerCase() + text.substr(1);
  };

  React.useEffect(() => {
    getUserData();
  }, []);

  return (
    <View style={styles.stories}>
      <FlatList
        keyExtractor={(item) => item.cell}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={usersData}
        renderItem={({ item }) => {
          const name = `${item.name.first}${item.name.last}`;
          const camelCaseName = convertToCamelCase(name);
          return (
            <TouchableOpacity style={styles.storie}>
              <Image
                source={{ uri: item.picture.large }}
                style={styles.storieImage}
              />
              <Text style={styles.storieOwner}>
                {camelCaseName.length > 11
                  ? camelCaseName.substr(0, 11) + "..."
                  : camelCaseName}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  stories: {
    marginTop: 15,
    marginBottom: 4,
    borderWidth: 1,
    borderBottomColor: "#e3e3e3",
  },
  storie: {
    marginBottom: 13,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 6,
  },
  storieImage: {
    width: 70,
    height: 70,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: "#ff8501",
  },
  storieOwner: {
    fontSize: 12,
    color: "white",
    marginTop: 3,
  },
});

export default Stories;
