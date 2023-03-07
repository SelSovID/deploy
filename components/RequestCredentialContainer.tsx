import * as React from "react";
import { Pressable, Text, StyleSheet, Image, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

type RequestCredentialContainerType = {
  /** Action props */
  onAanvragenPress?: () => void;
};

const RequestCredentialContainer = ({
  onAanvragenPress,
}: RequestCredentialContainerType) => {
  return (
    <View style={styles.credentialAanvragen}>
      <Pressable style={styles.aanvragen} onPress={onAanvragenPress}>
        <Text style={styles.button}>
          <Text style={styles.credentialAanvragen1}>Credential aanvragen</Text>
        </Text>
        <Image
          style={styles.phosphorIconsArrowcirclerigh}
          resizeMode="cover"
          source={require("../assets/phosphor-icons-arrowcircleright.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  credentialAanvragen1: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
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
  aanvragen: {
    alignSelf: "stretch",
    flex: 1,
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
    justifyContent: "space-between",
  },
  credentialAanvragen: {
    width: 159,
    height: 60,
    padding: Padding.p_sm,
    alignItems: "center",
  },
});

export default RequestCredentialContainer;
