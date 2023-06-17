import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Alert,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";

export function RegistrationScreen() {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [mail, SetMail] = useState("");
  const [password, setPassword] = useState("");
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const nameHandler = (text) => setName(text);
  const mailHandler = (text) => SetMail(text);
  const passwordHandler = (text) => setPassword(text);

  const onLogin = () => {
    if (!name || !mail || !password) {
      return Alert.alert("Credentials", `Please, enter your data`);
    }
    Alert.alert("Credentials", `${name} + ${password} + ${mail}`);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../images/bgimage.jpg")}
        resizeMode="cover"
        style={styles.imagebkg}
      />
      <View style={styles.innerContainer}>
        <View
          style={{
            ...styles.addPhotoBox,
            marginTop: isShowKeyboard ? 40 : -100,
          }}
        >
          <TouchableOpacity
            type={"file"}
            activeOpacity={0.7}
            style={styles.buttonPhoto}
            // onPress={() => navigation.navigate("Login")}
          >
            {isShowKeyboard && (
              <>
                <Image
                  style={styles.photo}
                  source={require("../../images/photo-profile.jpg")}
                />
                <Image
                  style={styles.removePhoto}
                  source={require("../../images/remove.png")}
                />
              </>
            )}
            {!isShowKeyboard && (
              <Image
                style={styles.addPhoto}
                source={require("../../images/add.png")}
              />
            )}
          </TouchableOpacity>
        </View>
        <TouchableWithoutFeedback
          onPress={Keyboard.dismiss}
          onPressOut={() => {
            if (Keyboard.dismiss) setIsShowKeyboard(false);
          }}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <Text
              style={{
                ...styles.title,
                marginTop: isShowKeyboard ? 30 : 0,
              }}
            >
              Registration
            </Text>
            <View style={styles.form}>
              <TextInput
                value={name}
                onChangeText={nameHandler}
                placeholder="Username"
                style={styles.input}
                onFocus={() => setIsShowKeyboard(true)}
              />
              <TextInput
                value={mail}
                onChangeText={mailHandler}
                placeholder="Mail"
                style={styles.input}
                onFocus={() => setIsShowKeyboard(true)}
              />
              <View style={styles.passbox}>
                <TextInput
                  value={password}
                  onChangeText={passwordHandler}
                  placeholder="Password"
                  secureTextEntry={true}
                  style={styles.input}
                  onFocus={() => setIsShowKeyboard(true)}
                />
                <Text style={styles.show}>Show</Text>
              </View>

              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.button}
                onPress={onLogin}
              >
                <Text style={styles.textButton}>SIGN IN</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text
                  style={{
                    ...styles.textLog,
                    marginBottom: isShowKeyboard ? -10 : 78,
                  }}
                >
                  Already have an account?
                  <Text> Log in</Text>
                </Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}

export { RegistrationScreen as default };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  imagebkg: {
    position: "absolute",
    width: "100%",
  },
  innerContainer: {
    width: "100%",
    height: "70%",
    marginTop: "auto",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    marginHorizontal: 16,
  },
  input: {
    minWidth: "100%",
    borderRadius: 8,
    height: 50,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
    backgroundColor: "#F6F6F6",
  },

  textLog: {
    marginTop: 16,
    // marginBottom: 78,
    textAlign: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 30,
    marginTop: 92,
    marginBottom: 33,
  },
  addPhotoBox: {
    position: "relative",
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    zIndex: 1,
  },
  buttonPhoto: {
    width: 21,
    height: 21,
    top: 81,
    left: 107,
  },
  photo: {
    position: "absolute",
    top: -82,
    right: 8,
    width: 120,
    height: 120,
    borderRadius: 16,
  },
  addPhoto: {
    zIndex: 2,
  },
  removePhoto: {
    position: "absolute",
    zIndex: 3,
    top: -6,
    right: -10,
  },
  // ton: {
  //   height: 51,
  //   width: 30,
  // },
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
  show: {
    position: "absolute",
    top: "50%",
    transform: [{ translateY: -15 }],
    right: 20,
  },
});
