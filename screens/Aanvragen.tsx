import * as React from "react";
import { useState } from "react";
import { SafeAreaView, ImageBackground, StyleSheet, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { useNavigation } from "@react-navigation/native";
import RequestCredentialContainer from "../components/RequestCredentialContainer";
import { Padding, Color } from "../GlobalStyles";

const Aanvragen = () => {
  const [issuerLijstOpen, setIssuerLijstOpen] = useState(false);
  const [issuerLijstValue, setIssuerLijstValue] = useState("");
  const navigation = useNavigation();

  return (
    <View style={styles.aanvragen}>
      <View style={styles.issuerlijstLayout}>
        <View style={[styles.issuerlijst, styles.issuerlijstLayout]}>
          <DropDownPicker
            style={styles.dropdownpicker}
            open={issuerLijstOpen}
            setOpen={setIssuerLijstOpen}
            value={issuerLijstValue}
            setValue={setIssuerLijstValue}
            placeholder="Kies een issuer uit de lijst"
            labelStyle={styles.issuerLijstValue}
            dropDownContainerStyle={styles.issuerLijstdropDownContainer}
          />
        </View>
      </View>
      <RequestCredentialContainer
        onAanvragenPress={() => navigation.navigate("Hoofdscherm")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  banner: {
    backgroundColor: "#fff",
  },
  issuerLijstValue: {
    color: "#230f80",
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Inter_medium",
  },
  issuerLijstdropDownContainer: {
    backgroundColor: "#f2f2f2",
  },
  issuerlijstLayout: {
    height: 58,
    width: 271,
  },
  dropdownpicker: {
    backgroundColor: "#f2f2f2",
  },
  issuerlijst: {
    position: "absolute",
    top: 0,
    left: 0,
    flexDirection: "row",
    paddingHorizontal: Padding.p_md,
    paddingVertical: Padding.p_xs,
    justifyContent: "center",
  },
  aanvragen: {
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

export default Aanvragen;
