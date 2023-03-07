import * as React from "react";
import { SafeAreaView, ImageBackground, StyleSheet, View } from "react-native";
import ViewContainer from "../components/ViewContainer";
import ButtonContainer from "../components/ButtonContainer";
import { Color, Padding } from "../GlobalStyles";

const Credential3 = () => {
  return (
    <View style={styles.credential}>
      <ViewContainer />
      <ButtonContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  banner: {
    backgroundColor: "#fff",
  },
  credential: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 796,
    paddingHorizontal: Padding.p_sm,
    paddingVertical: Padding.p_lg,
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default Credential3;
