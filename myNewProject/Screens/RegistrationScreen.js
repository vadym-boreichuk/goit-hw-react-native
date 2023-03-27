import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Alert,
  Button,
  ImageBackground,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";

export function RegistrationScreen() {
  const [name, setName] = useState("");
  const [mail, SetMail] = useState("");
  const [password, setPassword] = useState("");

  const nameHandler = (text) => setName(text);
  const mailHandler = (text) => SetMail(text);
  const passwordHandler = (text) => setPassword(text);

  const onLogin = () => {
    if (!name || !mail || !password) {
      return Alert.alert("Credentials", `Please, enter your data`);
    }
    Alert.alert("Credentials", `${name} + ${password} + ${mail}`);
  };
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../images/bgimage.jpg")}
        resizeMode="cover"
        style={styles.imagebkg}
      >
        <View style={styles.innerContainer}>
          <View style={styles.addPhotoBox}>
            <Image
              style={styles.addPhoto}
              source={require("../images/add.png")}
            />
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
              <Text style={styles.title}>Registration</Text>
              <View style={styles.form}>
                <TextInput
                  textAlign={"center"}
                  value={name}
                  onChangeText={nameHandler}
                  placeholder="Username"
                  style={styles.input}
                  onFocus={() => setIsShowKeyboard(true)}
                />
                <TextInput
                  textAlign={"center"}
                  value={mail}
                  onChangeText={mailHandler}
                  placeholder="Mail"
                  style={styles.input}
                  onFocus={() => setIsShowKeyboard(true)}
                />
                <View style={styles.passbox}>
                  <TextInput
                    textAlign={"center"}
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
              <Text
                style={{
                  ...styles.textLog,
                  marginBottom: isShowKeyboard ? -120 : 78,
                }}
              >
                Already have an account? Log in
              </Text>
            </KeyboardAvoidingView>
          </TouchableWithoutFeedback>
        </View>
      </ImageBackground>
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
    flex: 1,
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  innerContainer: {
    width: "100%",
    height: "70%",
    marginTop: "auto",
    // borderWidth: 4,
    // borderColor: "orange",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    marginHorizontal: 16,
    // borderWidth: 4,
    // borderColor: "orange",
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
    marginBottom: 78,
    textAlign: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 30,
    marginTop: 92,
    marginBottom: 33,
  },
  addPhotoBox: {
    position: "absolute",
    top: -60,
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    zIndex: 1,
  },
  addPhoto: {
    top: 81,
    left: 107,
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
    fontWeight: 400,
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
