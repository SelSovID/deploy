import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const ViewContainer = () => {
  return (
    <View style={styles.credentialinhoud}>
      <View style={styles.credentialPosition}>
        <View style={[styles.credential1, styles.credentialPosition]} />
        <Text style={styles.credentialtekst}>Voorbeeld credential tekst</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  credentialPosition: {
    left: 0,
    top: 0,
    position: "absolute",
    height: 534,
    width: 250,
  },
  credential1: {
    borderRadius: Border.br_md,
    backgroundColor: Color.ghostwhite,
  },
  credentialtekst: {
    top: 17,
    left: 17,
    fontSize: FontSize.size_base,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: FontFamily.bodyInter16Medium,
    color: Color.darkslategray,
    textAlign: "left",
    width: 217,
    height: 499,
    position: "absolute",
  },
  credentialinhoud: {
    height: 534,
    width: 250,
  },
});

export default ViewContainer;
