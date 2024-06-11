import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Pressable,
} from "react-native";
import React from "react";

const Loading = (props) => {
  return (
    <View style={[styles.container]}>
      <ActivityIndicator size="large" color="lightblue" />
      <Text style={styles.loginText}>Loading...</Text>

      <Pressable
        style={styles.closeButton}
        onPress={() => props.changeIsLoading()}
      >
        <Text>X</Text>
      </Pressable>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    backgroundColor: "rgba(0,0,0,0.8)",
    width: "100%",
    height: "100%",
  },
  loginText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  closeButton: {
    backgroundColor: "lightblue",
    position: "absolute",
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    top: 40,
    right: 20,
  },
});
