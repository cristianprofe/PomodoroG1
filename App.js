import { SafeAreaView, StyleSheet, Text, View, Platform } from "react-native";
import Titulo from "./src/components/Titulo";
import Boton from "./src/components/Boton";
import Visor from "./src/components/visor";
import Tabs from "./src/components/Tabs";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";

export default function App() {
  //logica del componente
  //Definimos estados para manejar la interfaz de usuario - useState: https://react.dev/reference/react/useState
  const [tiempo, setTiempo] = useState(25 * 60);
  const [run, setRun] = useState(false);
  const [seleccion, setSeleccion] = useState("op1" | "op2" | "op3");

  //colores - vamos a crear un arreglo de colores
  const colores = ["#F0B16C", "#EA6CF0", "#6CF0CA"];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/*Esto es para ios */}

      <View
        style={[
          styles.container,
          { paddingTop: Platform.OS === "android" ? 25 : 0 },
          { backgroundColor: colores[seleccion] },
        ]}
      >
        <StatusBar style="auto" />
        <Titulo title="Pomodoro App" />
        <Visor tiempo="25:00" />
        <Boton run={run} setRun={setRun} />
        <Tabs
          seleccion={seleccion}
          setSeleccion={setSeleccion}
          setTiempo={setTiempo}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
