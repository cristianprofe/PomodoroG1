import { View, StyleSheet, Text } from "react-native";

export default function Visor({ tiempo }) {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 40 }}>{tiempo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 0.4,
    borderWidth: 1,
    marginTop: 20,
    borderRadius: 20,
    backgroundColor: "white",
  },
});
