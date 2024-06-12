// SignUpPage.js
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Pressable,
  Image,
} from "react-native";
import { CustomTextInput, CustomButton } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { setName, setEmail, setPassword, setIsLoading } from "../app/userSlice";

const SignUpPage = ({ navigation }) => {
  const dispatch = useDispatch();
  const { name, email, password, isLoading } = useSelector(
    (state) => state.user
  );
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title}>
        <Image
          source={require("../../assets/images/signUpIcon.png")}
          style={styles.imageStyle}
        />

        <Text style={styles.title}>Sign Up</Text>
      </View>
      <View style={styles.inputContainer}>
        <CustomTextInput
          title="Name"
          isSecureText={false}
          handlePlaceholder="Enter your name (random name)"
          handleOnChangeText={(val) => dispatch(setName(val))}
          handleValue={name}
        />
        <CustomTextInput
          title="Email"
          isSecureText={false}
          handlePlaceholder="Enter your email (test@test.com)"
          handleOnChangeText={(val) => dispatch(setEmail(val))}
          handleValue={email}
        />
        <CustomTextInput
          title="Password"
          isSecureText={true}
          handlePlaceholder="Enter your password (123456)"
          handleOnChangeText={(val) => dispatch(setPassword(val))}
          handleValue={password}
        />
      </View>
      <View style={styles.signUpOptions}>
        <CustomButton
          buttonText="Sign Up"
          handleOnPress={() =>
            setTimeout(() => {
              dispatch(setIsLoading(false));
              navigation.navigate("LoginPage");
            }, 3000)
          }
          setwidth="50%"
          buttonColor="#007bff"
          pressedButtonColor="#0056b3"
        />
        <Text style={styles.signUp}>
          Already have an account?
          <Pressable onPress={() => navigation.navigate("LoginPage")}>
            <Text style={styles.loginLink}> Log In</Text>
          </Pressable>
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 20,
  },
  inputContainer: {
    // borderWidth: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  signUpOptions: {
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
  signUp: {
    marginVertical: 10,
  },
  loginLink: {
    color: "#007bff",
  },
  imageStyle: {
    width: 90,
    height: 90,
  },
});

export default SignUpPage;
