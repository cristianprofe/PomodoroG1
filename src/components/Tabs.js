import { Pressable, View, Text } from "react-native";

export default function Tabs({ props }) {
  const opciones = ["Pomodoro", "Descanso", "Descancito"];

  return (
    <View>
      {opciones.map((opcion, index) => (
        <Pressable key={index}>
          <Text>{opcion}</Text>
        </Pressable>
      ))}
    </View>
  );
}
