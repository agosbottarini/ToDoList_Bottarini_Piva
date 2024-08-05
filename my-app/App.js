import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import HomeScreen from './screens/HomeScreen';

export default function App() {
  const [tareas, setTareas] = useState([]);

  const agregarTarea = (titulo) => {
    setTareas((prevTareas) => [
      ...prevTareas,
      { id: Date.now().toString(), titulo, completada: false },
    ]);
  };

  const eliminarTarea = (id) => {
    setTareas((prevTareas) => prevTareas.filter((tarea) => tarea.id !== id));
  };

  const completarTarea = (id) => {
    setTareas((prevTareas) =>
      prevTareas.map((tarea) =>
        tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
      )
    );
  };

  return (
    <View style={styles.container}>
      <HomeScreen
        tareas={tareas}
        onAgregarTarea={agregarTarea}
        onDelete={eliminarTarea}
        onComplete={completarTarea}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: '#f5f5f5',
  },
});

