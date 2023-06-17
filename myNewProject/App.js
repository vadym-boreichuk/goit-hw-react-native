import "react-native-gesture-handler";
import React from "react";

// import { AppLoading } from "expo";

import { NavigationContainer } from "@react-navigation/native";

import { StyleSheet, View } from "react-native";

import { useRoute } from "./router";

export default function App() {
  // const [isReady, setIsReady] = useState(false);
  const routing = useRoute({});
  // if (!isReady) {
  //   return (
  //     <AppLoading
  //       // startAsync={loadApplication}
  //       onFinish={() => setIsReady(true)}
  //       onError={console.warn}
  //     />
  //   );
  // }
  return (
    <View style={styles.container}>
      <NavigationContainer>{routing}</NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});

// cd /Users/Marc/Desktop/Dev
// rm -rf ./node_mdoules/
// chown -R $USER ./masterclass/
// cd masterclass
// npm install

// auth
