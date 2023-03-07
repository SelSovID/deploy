import * as React from "react";
import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Credential2 from "../components/Credential2";
import Credential1 from "../components/Credential1";

const CredentialContainer = () => {
  const [credentialsFlatListData, setCredentialsFlatListData] = useState([
    <Credential2 />,
    <Credential1 />,
  ]);

  return (
    <View style={styles.credentiallijst}>
      <FlatList
        style={styles.credentials}
        data={credentialsFlatListData}
        renderItem={({ item }) => item}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  credentials: {
    width: 279,
    flex: 1,
    maxWidth: 279,
  },
  credentiallijst: {
    width: 275,
    height: 155,
    alignItems: "center",
  },
});

export default CredentialContainer;
