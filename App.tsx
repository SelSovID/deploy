const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
false;
import Inlogscherm from "./screens/Inlogscherm";
import Hoofdscherm from "./screens/Hoofdscherm";
import Credential3 from "./screens/Credential3";
import Accepteren from "./screens/Accepteren";
import Aanvragen from "./screens/Aanvragen";
import Banner2 from "./components/Banner2";
import Banner3 from "./components/Banner3";
import Banner from "./components/Banner";
import Banner1 from "./components/Banner1";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="Inlogscherm"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="Inlogscherm"
              component={Inlogscherm}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Hoofdscherm"
              component={Hoofdscherm}
              options={(props: any) => ({
                headerShown: true,
                header: () => <Banner2 />,
              })}
            />
            <Stack.Screen
              name="Credential"
              component={Credential3}
              options={(props: any) => ({
                headerShown: true,
                header: () => <Banner3 />,
              })}
            />
            <Stack.Screen
              name="Accepteren"
              component={Accepteren}
              options={(props: any) => ({
                headerShown: true,
                header: () => <Banner />,
              })}
            />
            <Stack.Screen
              name="Aanvragen"
              component={Aanvragen}
              options={(props: any) => ({
                headerShown: true,
                header: () => <Banner1 />,
              })}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
