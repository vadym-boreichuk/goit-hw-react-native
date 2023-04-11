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
  Text,
  Image,
  TouchableOpacity,
} from "react-native";

export function onLoginScreen() {
  const [name, setName] = useState("");
  const [mail, SetMail] = useState("");
  const [password, setPassword] = useState("");

  const mailHandler = (text) => SetMail(text);
  const passwordHandler = (text) => setPassword(text);

  const onLogin = () => {
    if (!mail || !password) {
      console.log("no mail");
      return Alert.alert("Credentials", `Please, enter your data`);
    }
    Alert.alert("Credentials", `${password} + ${mail}`);
  };
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  return (
    <View style={styles.container}>
      <Image
        source={require("../images/bgimage.jpg")}
        resizeMode="cover"
        style={styles.imagebkg}
      />
      <View style={styles.innerContainer}>
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
                marginTop: isShowKeyboard ? 32 : -32,
              }}
            >
              Log In
            </Text>
            <View style={styles.form}>
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
                <Text style={styles.textButton}>LOG IN</Text>
              </TouchableOpacity>
            </View>
            <Text
              style={{
                ...styles.textLog,
                marginBottom: isShowKeyboard ? -10 : 78,
              }}
            >
              Don't have an account? Register
            </Text>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}

export { onLoginScreen as default };

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
    marginBottom: 78,
    textAlign: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 30,
    marginTop: 92,
    marginBottom: 33,
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
  show: {
    position: "absolute",
    top: "50%",
    transform: [{ translateY: -15 }],
    right: 20,
  },
});
