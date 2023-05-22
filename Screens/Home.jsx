import axios from "axios";
import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Button,
  Alert,
} from "react-native";
import * as FileSystem from "expo-file-system";

const Home = () => {
  const [url, setUrl] = useState("");
  const handleChange = (text) => {
    setUrl(text);
    console.log(text);
  };

  const handleDownload = async () => {
    console.log("Called download function");
    try {
      console.log("Trying");
      const res = await axios.get("https://youtu.be/zb2BE6BP1wM", {
        responseType: "blob",
      });
      const { uri } = await FileSystem.downloadAsync(
        res.data,
        FileSystem.documentDirectory + "video.mp4"
      );
      Alert.alert("Video Downloaded", `File saved to: ${uri}`);
    } catch (error) {
      // alert("something went wrong");
      Alert.alert(error);
      console.log(error);
    }
    // Alert.alert('Download link', url)
    // alert(url)
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.topContainer}>
        <Text style={styles.appTitle}>
          Sure D<Text style={styles.titleLoaderText}>own vid</Text>eo down
          <Text style={styles.titleLoaderText}>loader</Text>
        </Text>
        <TextInput
          onChangeText={(text) => setUrl(text)}
          style={styles.linkInput}
          placeholderTextColor="blue"
          placeholder="Paste video url here"
        ></TextInput>
        <View style={styles.downBtn}>
          <Button
            color={"darkblue"}
            title="Download"
            onPress={handleDownload}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#8cb696",
    height: "100%",
    width: "100%",
    flex: 1,
  },
  topContainer: {
    backgroundColor: "#070700",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  appTitle: {
    color: "blue",
    fontSize: 30,
    marginTop: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  titleLoaderText: {
    color: "darkred",
  },
  linkInput: {
    backgroundColor: "white",
    width: "100%",
    maxWidth: "80%",
    marginHorizontal: "10%",
    padding: 10,
    borderRadius: 4,
    marginTop: 20,
  },

  downBtn: {
    display: "flex",
    width: "100%",
    color: "black",
    marginVertical: "5%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Home;
