import React from "react";

import { View, Text, StyleSheet, Image } from "react-native";

const PostsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Image
          style={styles.image}
          source={require("../../images/photo-profile.jpg")}
        />
        <Text style={styles.nameText}>Natali Romanova</Text>
        <Text style={styles.mailText}>email@example.com</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    paddingLeft: 16,
    paddingTop: 32,
    // alignItems: "flex-start",
  },
  box: {
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    width: 171,
    height: 60,
  },
  image: {
    width: 60,
    height: 60,
  },
  nameText: {
    font: "Roboto",
    weight: 700,
    paddingLeft: 8,
  },
  mailText: {
    font: "Roboto",
    weight: 400,
    paddingLeft: 8,
  },
});

export default PostsScreen;
