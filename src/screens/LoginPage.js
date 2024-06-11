import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Loading, CustomButton, CustomTextInput } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { setEmail, setPassword, setIsLoading } from "../app/userSlice";

const LoginPage = ({ navigation }) => {
  const { email, password, isLoading } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // console.log(name, lastName);
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/logIcon.png")}
        style={styles.imageStyle}
      />
      <Text style={styles.welcome}>Welcome</Text>

      <CustomTextInput
        title="Email"
        isSecureText={false}
        handlePlaceholder="Enter Your Email"
        handleOnChangeText={(val) => dispatch(setEmail(val))}
        handleValue={email}
      />
      <CustomTextInput
        title="Password"
        isSecureText={true}
        handlePlaceholder="Enter Your Password"
        handleOnChangeText={(val) => dispatch(setPassword(val))}
        handleValue={password}
      />
      <CustomButton
        buttonText="Login"
        setwidth="80%"
        handleOnPress={() => dispatch(setIsLoading(true))}
        buttonColor="lightblue"
        pressedButtonColor="gray"
      />
      <CustomButton
        buttonText="Sign Up"
        setwidth="45%"
        handleOnPress={() => navigation.navigate("SignUpPage")}
        buttonColor="gray"
        pressedButtonColor="lightblue"
      />
      {isLoading ? (
        <Loading changeIsLoading={() => dispatch(setIsLoading(false))} />
      ) : null}
    </View>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  imageStyle: {
    width: 100,
    height: 100,
  },
  welcome: {
    fontSize: 25,
    fontWeight: "bold",
    marginVertical: 20,
  },
});
