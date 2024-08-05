import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Tarea from './Tarea';

const ListaTareas = ({ tareas, onDelete, onComplete }) => {
  return (
    <FlatList
      data={tareas}
      renderItem={({ item }) => (
        <Tarea tarea={item} onDelete={onDelete} onComplete={onComplete} />
      )}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.lista}
    />
  );
};

const styles = StyleSheet.create({
  lista: {
    paddingHorizontal: 21,
  },
});

export default ListaTareas;
