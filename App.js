import { View, Text, StatusBar } from "react-native";
import React from "react";
import Home from "./Screens/Home";

const App = () => {
  return (
    <>
      <StatusBar backgroundColor='#2d2e0a' />
      <View style={{ height: "100%", width: "100%" }}>
        <Home />
      </View>
    </>
  );
};

export default App;
