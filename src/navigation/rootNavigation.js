import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import UserStack from "./UserStack";
import { useSelector } from "react-redux";

const rootNavigation = () => {
  const isAuth = useSelector((state) => state.user.isAuth);
  return (
    <NavigationContainer>
      {isAuth ? <UserStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default rootNavigation;
