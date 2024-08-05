import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ListaTareas from '../components/ListaTareas';
import AgregarTarea from '../components/AgregarTarea';

const HomeScreen = ({ tareas, onAgregarTarea, onDelete, onComplete }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>To-Do List</Text>
      <AgregarTarea onAgregarTarea={onAgregarTarea} />
      <ListaTareas tareas={tareas} onDelete={onDelete} onComplete={onComplete} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
});

export default HomeScreen;
