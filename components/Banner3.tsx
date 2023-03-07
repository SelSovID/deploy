import * as React from "react";
import {
  View,
  SafeAreaView,
  StyleProp,
  ViewStyle,
  ImageBackground,
  StyleSheet,
} from "react-native";
import { Color, Padding } from "../GlobalStyles";

type Banner3Type = {
  style?: StyleProp<ViewStyle>;
};

const Banner3 = ({ style }: Banner3Type) => {
  return (
    <SafeAreaView style={[styles.banner, style]}>
      <View style={styles.view}>
        <ImageBackground
          style={styles.ditlabbannerIcon}
          resizeMode="cover"
          source={require("../assets/ditlabbanner.png")}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  banner: {
    backgroundColor: Color.white,
  },
  ditlabbannerIcon: {
    width: 304,
    height: 79,
  },
  view: {
    alignSelf: "stretch",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_sm,
    alignItems: "center",
    height: 79,
  },
});

export default Banner3;
