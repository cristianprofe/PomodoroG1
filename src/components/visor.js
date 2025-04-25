import { View, StyleSheet, Text } from "react-native";

export default function Visor({ tiempo }) {
  const TiempoFormateado = `${Math.floor(tiempo / 60)
    .toString()
    .padStart(2, "0")}:${Math.floor(tiempo % 60)
    .toString()
    .padStart(2, "0")}`;

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 40 }}>{TiempoFormateado}</Text>
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
