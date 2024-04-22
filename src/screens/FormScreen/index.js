import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const FormDataDiriScreen = ({ onSubmitNama }) => {
  const [nama, setNama] = useState('');
  const [hobi, setHobi] = useState('');

  const handleSubmit = () => {
    onSubmitNama(nama); // Mengirim kembali nama ke komponen induk
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Masukkan data diri Anda:</Text>
      <TextInput
        style={styles.input}
        placeholder="Nama"
        value={nama}
        onChangeText={text => setNama(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Hobi"
        value={hobi}
        onChangeText={text => setHobi(text)}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
});

export default FormDataDiriScreen;
