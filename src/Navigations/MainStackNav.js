import React, { useLayoutEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeNav from "./HomeNav";
import FeedStackNav from "./FeedStackNav";
import {
  MyPageEditScreen,
  LoginScreen,
  SigninScreen,
  TutorialScreen,
} from "../screens";
const Stack = createNativeStackNavigator();

const MainStackNav = () => {
  const checkAuth = () => {
    // local ?? userIdλ₯? κ°?? Έ??? ? λ³΄κ?? ??€λ©? λ°λ‘ Home?Όλ‘? λ³΄λ΄κ³?, κ·Έλ μ§? ??Όλ©? Login?Όλ‘?
  };
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: true }}
    >
      <Stack.Screen
        name="Home"
        component={HomeNav}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="FeedDetail" component={FeedStackNav} />
      <Stack.Screen name="MyPageEdit" component={MyPageEditScreen} />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Signin"
        component={SigninScreen}
        options={{
          headerTitle: "??κ°??",
          cardStyle: { backgroundColor: "white" },
        }}
      />
      <Stack.Screen
        name="Tutorial"
        component={TutorialScreen}
        options={{
          headerShown: false,
          cardStyle: { backgroundColor: "white" },
        }}
      />
    </Stack.Navigator>
  );
};

export default MainStackNav;
