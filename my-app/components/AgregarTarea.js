import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';

const AgregarTarea = ({ onAgregarTarea }) => {
  const [titulo, setTitulo] = useState('');

  const handleAgregarTarea = () => {
    if (titulo.length > 0) {
      onAgregarTarea(titulo);
      setTitulo('');
    }
  };

  return (
    <View style={styles.agregarTarea}>
      <TextInput
        placeholder="Agregá tu tarea"
        value={titulo}
        onChangeText={setTitulo}
        style={styles.input}
      />
      <TouchableOpacity onPress={handleAgregarTarea} style={styles.botonAgregar}>
        <Text style={styles.textoBoton}>Agregar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  agregarTarea: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginVertical: 10,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
    backgroundColor: '#fff',
  },
  botonAgregar: {
    backgroundColor: '#3f79d1',
    padding: 15,
    borderRadius: 5,
  },
  textoBoton: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default AgregarTarea;
