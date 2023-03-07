import * as React from "react";
import {
  Pressable,
  StyleProp,
  ViewStyle,
  StyleSheet,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

type Credential2Type = {
  style?: StyleProp<ViewStyle>;
};

const Credential2 = ({ style }: Credential2Type) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.credentialLayout, style]}
      onPress={() => navigation.navigate("Credential")}
    >
      <Pressable style={[styles.credentialChild, styles.credentialLayout]} />
      <Text style={styles.credentialtekst}>Voorbeeld credential</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  credentialLayout: {
    height: 69,
    width: 279,
  },
  credentialChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_md,
    backgroundColor: Color.ghostwhite,
    position: "absolute",
  },
  credentialtekst: {
    top: 25,
    left: 19,
    fontSize: FontSize.size_base,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: FontFamily.bodyInter16Medium,
    color: Color.darkslategray,
    textAlign: "left",
    width: 242,
    height: 10,
    position: "absolute",
  },
});

export default Credential2;
