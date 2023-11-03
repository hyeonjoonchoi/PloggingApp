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
    // local ?—?„œ userIdë¥? ê°?? ¸?™”?„?•Œ ? •ë³´ê?? ?ˆ?‹¤ë©? ë°”ë¡œ Home?œ¼ë¡? ë³´ë‚´ê³?, ê·¸ë ‡ì§? ?•Š?œ¼ë©? Login?œ¼ë¡?
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
          headerTitle: "?šŒ?›ê°??…",
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
