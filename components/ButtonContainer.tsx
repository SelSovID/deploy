import * as React from "react";
import { Pressable, Text, StyleSheet, Image, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Margin,
  Padding,
  Border,
  FontSize,
  FontFamily,
  Color,
} from "../GlobalStyles";

const ButtonContainer = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.knoppenframe}>
      <View style={styles.knoppenlijst}>
        <Pressable
          style={[styles.naaroverzicht, styles.naaroverzichtFlexBox]}
          onPress={() => navigation.navigate("Hoofdscherm")}
        >
          <Text style={styles.button}>Terug naar overzicht</Text>
          <Image
            style={[styles.phosphorIconsArrowcirclerigh, styles.ml4]}
            resizeMode="cover"
            source={require("../assets/phosphor-icons-arrowcircleright3.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.credentialaanbieden, styles.naaroverzichtFlexBox]}
          onPress={() => navigation.navigate("Hoofdscherm")}
        >
          <Text style={styles.button}>Credential aanbieden</Text>
          <Image
            style={[styles.phosphorIconsArrowcirclerigh, styles.ml4]}
            resizeMode="cover"
            source={require("../assets/phosphor-icons-arrowcircleright3.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml4: {
    marginLeft: Margin.m_md,
  },
  naaroverzichtFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_md,
    flexDirection: "row",
    borderRadius: Border.br_sm,
    left: 0,
    position: "absolute",
    width: 300,
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
  naaroverzicht: {
    top: 49,
    backgroundColor: Color.primaryHover,
  },
  credentialaanbieden: {
    backgroundColor: Color.limegreen,
    top: 0,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_md,
    flexDirection: "row",
    borderRadius: Border.br_sm,
  },
  knoppenlijst: {
    left: 0,
    position: "absolute",
    top: 0,
    height: 81,
    width: 300,
  },
  knoppenframe: {
    height: 81,
    width: 300,
  },
});

export default ButtonContainer;
