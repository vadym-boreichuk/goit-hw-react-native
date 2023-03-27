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

  return (
    <>
      <ImageBackground
        source={require("../images/bgimage.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.photo}>
          <Image style={styles.add} source={require("../images/add.png")} />
        </View>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <KeyboardAvoidingView
              behavior={Platform.OS == "ios" ? "padding" : "height"}
            >
              <Text style={styles.title}>Registration</Text>
              <TextInput
                value={name}
                onChangeText={nameHandler}
                placeholder="Username"
                style={styles.input}
              />
              <TextInput
                value={mail}
                onChangeText={mailHandler}
                placeholder="Mail"
                style={styles.input}
              />
              <View style={styles.passbox}>
                <TextInput
                  value={password}
                  onChangeText={passwordHandler}
                  placeholder="Password"
                  secureTextEntry={true}
                  style={styles.input}
                />
                <Text style={styles.show}>Show</Text>
              </View>
              <View style={styles.buttonStyle}>
                <Button
                  title={"Login"}
                  style={styles.button}
                  color="#FF6C00"
                  onPress={onLogin}
                />
              </View>
              <Text style={styles.text}>Already have an account? Log in</Text>
            </KeyboardAvoidingView>
          </View>
        </TouchableWithoutFeedback>
      </ImageBackground>
    </>
  );
}

export { RegistrationScreen as default };

const styles = StyleSheet.create({
  container: {
    position: "relative",
    // bottom: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "70%",
    marginTop: "auto",
    // borderWidth: 4,
    // borderColor: "orange",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "white",
  },
  buttonStyle: {
    // position: "absolute",
    marginTop: 43,
  },
  input: {
    borderRadius: 8,
    height: 50,
    width: 343,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
    backgroundColor: "#F6F6F6",
  },
  image: {
    flex: 1,
    width: "100%",
  },
  text: {
    // position: "absolute",
    marginTop: 16,
    textAlign: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 30,
    marginBottom: 33,
  },
  photo: {
    position: "absolute",
    top: "30%",
    left: "50%",
    transform: [{ translateX: -50 }, { translateY: -50 }],
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    zIndex: 1,
  },
  add: {
    position: "relative",
    top: 81,
    left: 107,
    zIndex: 5,
  },
  passbox: {
    position: "relative",
    // borderWidth: 4,
    // borderColor: "black",
  },
  show: {
    position: "absolute",
    top: "50%",
    transform: [{ translateY: -15 }],
    right: 20,
  },
});
