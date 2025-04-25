import { Pressable, Text, View, StyleSheet } from "react-native";
import playSonido from "../utility/playSound";

export default function Boton(props) {
  //se desestrutura el objeto props para obtener las propiedades run y setRun
  const { run, setRun } = props;
  //se importa el sonido desde assets, y se guarda en una variable
  const sonido = require("../../assets/sound/click.mp3");

  //Crear una funcion para cambiar el valor del estado run

  const cambiarEstado = () => {
    setRun(!run);
    //utilizo la funcion reutilizable que acabo de modicar
    playSonido(sonido);
  };

  return (
    <View>
      <Pressable onPress={() => cambiarEstado()}>
        {({ pressed }) => (
          <Text style={[styles.boton, { opacity: pressed ? 0.5 : 1 }]}>
            {
              //Renderizado condicional para cambiar el texto del boton
              run ? "Parar" : "Iniciar"
            }
          </Text>
        )}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  boton: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    borderWidth: 1,
    padding: 5,
    borderRadius: 20,
    backgroundColor: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
