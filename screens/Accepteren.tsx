import * as React from "react";
import {
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  Pressable,
  Text,
  Image,
  View,
} from "react-native";
import ViewContainer from "../components/ViewContainer";
import {
  Margin,
  Padding,
  Border,
  FontSize,
  FontFamily,
  Color,
} from "../GlobalStyles";

const Accepteren = () => {
  return (
    <View style={styles.accepteren}>
      <ViewContainer />
      <View style={styles.knoppenlijstframe}>
        <Pressable style={styles.knoppenlijst}>
          <Pressable style={[styles.weiger, styles.weigerFlexBox]}>
            <Text style={styles.button}>Weiger</Text>
            <Image
              style={[styles.phosphorIconsArrowcirclerigh, styles.ml4]}
              resizeMode="cover"
              source={require("../assets/phosphor-icons-arrowcircleright3.png")}
            />
          </Pressable>
          <Pressable style={[styles.accepteer, styles.weigerFlexBox]}>
            <Text style={styles.button}>Accepteer</Text>
            <Image
              style={[styles.phosphorIconsArrowcirclerigh, styles.ml4]}
              resizeMode="cover"
              source={require("../assets/phosphor-icons-arrowcircleright3.png")}
            />
          </Pressable>
        </Pressable>
      </View>
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
  weigerFlexBox: {
    justifyContent: "center",
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_md,
    flexDirection: "row",
    width: 137,
    borderRadius: Border.br_sm,
    position: "absolute",
    alignItems: "center",
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
  weiger: {
    left: 160,
    backgroundColor: "#d9183b",
    top: 0,
  },
  accepteer: {
    top: 1,
    backgroundColor: Color.primaryHover,
    left: 0,
  },
  knoppenlijst: {
    left: 0,
    top: 0,
    position: "absolute",
    height: 33,
    width: 297,
  },
  knoppenlijstframe: {
    height: 33,
    width: 297,
  },
  accepteren: {
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

export default Accepteren;
