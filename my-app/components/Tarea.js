import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const Tarea = ({ tarea, onDelete, onComplete }) => {
  return (
    <View style={styles.tareaItem}>
      <TouchableOpacity onPress={() => onComplete(tarea.id)} style={styles.checkbox}>
        {tarea.completada ? 
        (
          <AntDesign name="checkcircle" size={25} color="green" />
        ) 
        : 
        (
          <AntDesign name="checkcircleo" size={25} color="gray" />
        )}
      </TouchableOpacity>
      <Text style={tarea.completada ? styles.completada : styles.pendiente}>
        {tarea.titulo}
      </Text>
      <TouchableOpacity onPress={() => onDelete(tarea.id)}>
        <AntDesign name="close" size={30} color="gray" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  tareaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    marginVertical: 8,
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
  checkbox: {
    marginRight: 10,
  },
  completada: {
    textDecorationLine: 'line-through',
    color: 'gray',
    flex: 1,
  },
  pendiente: {
    color: 'black',
    flex: 1,
  },
});

export default Tarea;
