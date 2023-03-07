import * as React from "react";
import { useState } from "react";
import {
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  Pressable,
  Text,
  Image,
  Switch,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import CredentialContainer from "../components/CredentialContainer";
import RequestCredentialContainer from "../components/RequestCredentialContainer";
import { Margin, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const Hoofdscherm = () => {
  const [themaSwitchValue, setThemaSwitchValue] = useState(true);
  const navigation = useNavigation();

  return (
    <View style={styles.hoofdscherm}>
      <View style={styles.settingsframe}>
        <View style={styles.settings}>
          <Pressable style={[styles.settings1, styles.settings1FlexBox]}>
            <Text style={styles.button}>Settings</Text>
            <Image
              style={[styles.phosphorIconsArrowcirclerigh, styles.ml4]}
              resizeMode="cover"
              source={require("../assets/phosphor-icons-arrowcircleright1.png")}
            />
          </Pressable>
          <Switch
            style={[styles.themaswitch, styles.settings1FlexBox]}
            value={themaSwitchValue}
            onValueChange={setThemaSwitchValue}
            thumbColor="#333"
            trackColor={{ false: "#939393", true: "#f7f5ff" }}
          />
        </View>
      </View>
      <CredentialContainer />
      <RequestCredentialContainer
        onAanvragenPress={() => navigation.navigate("Aanvragen")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  banner: {
    backgroundColor: "#fff",
  },
  ml4: {
    marginLeft: Margin.m_md,
  },
  settings1FlexBox: {
    flexDirection: "row",
    position: "absolute",
    alignItems: "center",
  },
  button: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: FontFamily.bodyInter16Medium,
    color: Color.primaryMain,
    textAlign: "left",
  },
  phosphorIconsArrowcirclerigh: {
    width: 16,
    height: 16,
  },
  settings1: {
    top: -2,
    left: -2,
    borderRadius: Border.br_sm,
    borderStyle: "solid",
    borderColor: "#ac9ff0",
    borderWidth: 2,
    width: 95,
    paddingHorizontal: Padding.p_md,
    paddingVertical: Padding.p_xs,
    justifyContent: "center",
  },
  themaswitch: {
    top: 3,
    left: 210,
    width: 83,
  },
  settings: {
    width: 293,
    height: 28,
  },
  settingsframe: {
    width: 291,
    alignItems: "center",
  },
  hoofdscherm: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 796,
    paddingHorizontal: Padding.p_sm,
    paddingVertical: Padding.p_lg,
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default Hoofdscherm;
