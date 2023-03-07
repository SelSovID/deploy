import * as React from "react";
import { Image, StyleSheet, View, Pressable, Text } from "react-native";
import { TextInput as RNPTextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Inlogscherm = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.inlogscherm, styles.aanmeldenFlexBox]}>
      <View style={[styles.banner, styles.bannerSpaceBlock]}>
        <Image
          style={styles.ditlabbannerIcon}
          resizeMode="cover"
          source={require("../assets/ditlabbanner.png")}
        />
      </View>
      <View style={[styles.aanmelden, styles.aanmeldenFlexBox]}>
        <RNPTextInput
          style={styles.gebruikersnaam}
          placeholder="Gebruikersnaam"
          label="Type hier je gebruikersnaam"
          mode="flat"
          placeholderTextColor="#4d4d4d"
          theme={{ colors: { text: "#999" } }}
        />
        <RNPTextInput
          style={styles.wachtwoord}
          placeholder="Wachtwoord"
          label="Type hier je wachtwoord"
          mode="outlined"
          placeholderTextColor="#4d4d4d"
          theme={{ colors: { text: "#999" } }}
        />
      </View>
      <View style={[styles.aanmeldenframe, styles.bannerSpaceBlock]}>
        <Pressable
          style={styles.aanmelden1}
          onPress={() => navigation.navigate("Hoofdscherm")}
        >
          <Text style={styles.button}>Aanmelden</Text>
          <Image
            style={styles.phosphorIconsArrowcirclerigh}
            resizeMode="cover"
            source={require("../assets/phosphor-icons-arrowcircleright.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  aanmeldenFlexBox: {
    alignItems: "center",
    justifyContent: "space-between",
  },
  bannerSpaceBlock: {
    padding: Padding.p_sm,
    alignItems: "center",
  },
  ditlabbannerIcon: {
    width: 304,
    height: 79,
  },
  banner: {
    height: 73,
    alignSelf: "stretch",
    backgroundColor: Color.white,
  },
  gebruikersnaam: {
    width: 267,
  },
  wachtwoord: {
    width: 261,
  },
  aanmelden: {
    width: 265,
    height: 125,
    justifyContent: "space-between",
  },
  button: {
    fontSize: FontSize.bodyInter16Medium_size,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: FontFamily.bodyInter16Medium,
    color: Color.ghostwhite,
    textAlign: "left",
  },
  phosphorIconsArrowcirclerigh: {
    width: 24,
    height: 24,
  },
  aanmelden1: {
    borderRadius: Border.br_sm,
    backgroundColor: Color.primaryHover,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    flexDirection: "row",
    paddingHorizontal: Padding.p_md,
    paddingVertical: Padding.p_sm,
    alignItems: "flex-end",
    alignSelf: "stretch",
    justifyContent: "space-between",
    flex: 1,
  },
  aanmeldenframe: {
    width: 159,
    height: 60,
    justifyContent: "flex-end",
  },
  inlogscherm: {
    width: "100%",
    height: 796,
    justifyContent: "space-between",
    flex: 1,
    backgroundColor: Color.white,
  },
});

export default Inlogscherm;
