import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

const CustomButton = ({
  buttonText,
  handleOnPress,
  setwidth,
  buttonColor,
  pressedButtonColor,
}) => {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        onPress={() => {
          handleOnPress();
        }}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? pressedButtonColor : buttonColor,
            width: setwidth,
          },
          styles.buttonStyle,
        ]}
      >
        <Text style={styles.buttonTextStyle}>{buttonText}</Text>
      </Pressable>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  buttonContainer: {
    marginVertical: 10,
  },
  buttonStyle: {
    padding: 10,
    borderRadius: 5,
  },
  buttonTextStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
