import * as React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const Post = () => {
  return (
    <View style={styles.container}>
      {[1, 2, 3, 4].map((item, index) => {
        return (
          <View style={styles.post} key={index}>
            <View style={styles.postHeader}>
              <TouchableOpacity>
                <View style={styles.postOwner}>
                  <Image
                    style={styles.postOwnerImage}
                    source={require("../../assets/images/userCoding.jpeg")}
                  />
                  <Text style={styles.postOwnerName}>Alqama</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  style={{ width: 18, height: 18, resizeMode: "contain" }}
                  source={{
                    uri: "https://img.icons8.com/ios-glyphs/30/000000/more.png",
                  }}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <Image
                style={styles.postImage}
                source={require("../../assets/images/userCoding.jpeg")}
              />
            </TouchableOpacity>
            <View style={styles.postFooter}>
              <View style={styles.postFooterIcons}>
                <View style={styles.postFooterIcons}>
                  <TouchableOpacity>
                    <Image
                      style={styles.postFooterIcon}
                      source={{
                        uri: "https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png",
                      }}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      style={styles.postFooterIcon}
                      source={{
                        uri: "https://img.icons8.com/ios/50/000000/topic.png",
                      }}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      style={styles.postFooterIcon}
                      source={{
                        uri: "https://img.icons8.com/external-flatart-icons-outline-flatarticons/50/000000/external-send-email-flatart-icons-outline-flatarticons.png",
                      }}
                    />
                  </TouchableOpacity>
                </View>
                <TouchableOpacity>
                  <Image
                    source={{
                      uri: "https://img.icons8.com/external-bearicons-detailed-outline-bearicons/64/000000/external-Save-social-media-bearicons-detailed-outline-bearicons.png",
                    }}
                    style={[
                      styles.postFooterIcon,
                      { marginRight: 0, width: 25 },
                    ]}
                  />
                </TouchableOpacity>
              </View>
              <Text style={styles.postFooterLikes}>2,34,400 views</Text>
              <View style={styles.captions}>
                <Text style={styles.postOwnerName}>Alqama</Text>
                <Text style={styles.postCaption}>band karna na kya karra</Text>
              </View>
              <TouchableOpacity>
                <Text style={styles.postComments}>View all 722 comments</Text>
              </TouchableOpacity>
              <Text style={styles.postDate}>1 day ago</Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
  },
  post: {
    marginVertical: 8,
  },
  postHeader: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  postOwner: {
    flexDirection: "row",
    alignItems: "center",
  },
  postOwnerImage: {
    width: 40,
    height: 40,
    borderRadius: 100,
    marginRight: 8,
    borderWidth: 1,
    borderColor: "#ff8501",
  },
  postOwnerName: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "bold",
    marginRight: 8,
  },
  postImage: {
    width: undefined,
    height: 500,
    borderRadius: 5,
    marginVertical: 10,
  },
  postFooter: {
    paddingHorizontal: 10,
  },
  postFooterIcons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  postFooterIcon: {
    width: 30,
    height: 30,
    resizeMode: "contain",
    marginRight: 20,
  },
  postFooterLikes: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "bold",
    marginTop: 10,
  },
  captions: {
    flexDirection: "row",
    alignItems: "center",
  },
  postCaption: {
    fontSize: 14,
    color: "rgb(204, 196, 196)",
  },
  postComments: {
    fontSize: 14,
    color: "grey",
    fontWeight: "bold",
  },
  postDate: {
    fontSize: 12,
    color: "grey",
    marginTop: 3,
  },
});

export default Post;
