import { SafeAreaView, StyleSheet, Text, View, Platform } from "react-native";
import Titulo from "./src/components/Titulo";
import Boton from "./src/components/Boton";
import Visor from "./src/components/visor";
import Tabs from "./src/components/Tabs";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/*Esto es para ios */}
      <View
        style={[
          styles.container,
          { marginTop: Platform.OS === "android" ? 25 : 0 },
        ]}
      >
        <Titulo title="Pomodoro App" />
        <Titulo title="Config" />
        <Visor />
        <Boton />
        <Tabs />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFDC2",
  },
});
