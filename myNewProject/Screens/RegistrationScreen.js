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
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView
              behavior={Platform.OS == "ios" ? "padding" : "height"}
            >
              <Text style={styles.title}>Registration</Text>
              <View style={styles.form}>
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

                <Button
                  title={"Login"}
                  style={styles.button}
                  color="#FF6C00"
                  onPress={onLogin}
                />
              </View>
              <Text style={styles.textLog}>
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
    justifyContent: "center",
    alignItems: "center",
  },
  innerContainer: {
    width: "100%",
    height: "70%",
    marginTop: "auto",
    borderWidth: 4,
    borderColor: "orange",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    marginHorizontal: 16,
    // width: "100%",
    // borderWidth: 4,
    // borderColor: "orange",
    // // marginHorizontal: 40,
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
    // position: "absolute",
    marginTop: 16,
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
  passbox: {
    // position: "relative",
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
