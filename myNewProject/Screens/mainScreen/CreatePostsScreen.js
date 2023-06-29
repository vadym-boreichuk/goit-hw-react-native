import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const CreatePostsScreen = () => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.addPhoto}>
        <View style={styles.addPhotobutton}>
          <MaterialIcons name="camera-alt" size={24} color="#BDBDBD" />
        </View>
      </View>
      <Text style={styles.addPhotoText}>Download photo</Text>
      <TouchableWithoutFeedback
        onPress={Keyboard.dismiss}
        onPressOut={() => {
          if (Keyboard.dismiss) setIsShowKeyboard(false);
        }}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <View style={styles.form}>
            <TextInput
              placeholder="Title"
              style={styles.inputTitle}
              onFocus={() => setIsShowKeyboard(true)}
            />

            <TextInput
              style={styles.input}
              placeholder="Locality"
              onFocus={() => setIsShowKeyboard(true)}
            />
            <Feather
              style={styles.mapIcon}
              name="map-pin"
              size={24}
              color="black"
            />
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.button}
              // onPress={onLogin}
            >
              <Text style={styles.textButton}>Publicate</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
      <View style={styles.trashButton}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  addPhoto: {
    justifyContent: "center",
    alignItems: "center",
    width: 343,
    height: 240,
    backgroundColor: "#F6F6F6",
    marginTop: 32,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#E8E8E8",
  },
  addPhotobutton: {
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    backgroundColor: "white",
    borderRadius: 30,
  },
  addPhotoText: {
    padding: 8,
  },
  inputTitle: {
    width: 343,
    height: 50,
    borderBottomWidth: 1,
    borderColor: "#E8E8E8",
  },

  input: {
    width: 343,
    // borderRadius: 8,
    height: 50,
    paddingLeft: 30,
    borderBottomWidth: 1,
    borderColor: "#E8E8E8",
    // marginBottom: 10,
    // backgroundColor: "#F6F6F6",
  },
  form: {
    position: "relative",
  },
  mapIcon: {
    position: "absolute",
    top: 65,
    left: 0,
    color: "#BDBDBD",
  },
  button: {
    marginTop: 43,
    backgroundColor: "#FF6C00",
    height: 51,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
  },
  textButton: {
    // fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    color: "#FFFFFF",
  },
  trashButton: {
    width: 70,
    height: 40,
    backgroundColor: "#F6F6F6",
    borderRadius: 20,
  },
});

export default CreatePostsScreen;
