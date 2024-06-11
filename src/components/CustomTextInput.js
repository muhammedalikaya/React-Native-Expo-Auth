import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

const CustomTextInput = ({
  title,
  isSecureText,
  handlePlaceholder,
  handleOnChangeText,
  handleValue,
}) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputBoxText}>{title}</Text>
      <TextInput
        style={styles.textInputStyle}
        placeholder={handlePlaceholder}
        onChangeText={handleOnChangeText}
        value={handleValue}
        secureTextEntry={isSecureText}
      />
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    width: "70%",
    marginVertical: 5,
  },
  inputBoxText: {
    fontWeight: "bold",
  },
  textInputStyle: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
});
