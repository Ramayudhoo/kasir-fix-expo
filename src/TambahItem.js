import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { PermissionsAndroid } from 'react-native';
import { CameraView, useCameraPermissions} from 'expo-camera';

export default function TambahItem({ navigation }) {
  const [namaItem, setNamaItem] = useState('');
  const [hargaItem, setHargaItem] = useState('');
  const [facing, setFacing] = useState('back');
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }
  
  const openGalleryWithCallback = () => {
    const options = { mediaType: 'photo' };
    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('Pengguna membatalkan pemilihan gambar');
      } else if (response.errorCode) {
        console.log('Error:', response.errorMessage);
      } else {
        console.log('Gambar dipilih:', response.assets[0].uri);
        // Lakukan sesuatu dengan gambar yang dipilih
      }
    });
  };

  const handleTambahItem = () => {
    // Lakukan aksi tambah item (misalnya, simpan ke database)
    // ...
    console.log('Item berhasil ditambahkan:', 'Nama Item:', namaItem, 'Harga Item:', hargaItem);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tambah Item</Text>
      <Text style={styles.text}>Nama Item:</Text>
      <TextInput
        style={styles.input}
        placeholder="Nama Item"
        value={namaItem}
        onChangeText={(text) => setNamaItem(text)}
      />
      <Text>Harga Item:</Text>
      <TextInput
        style={styles.input}
        placeholder="Harga Item"
        value={hargaItem}
        onChangeText={(text) => setHargaItem(text)}
        keyboardType="numeric"
      />
      <Button title="Buka Kamera" onPress={toggleCameraFacing} />
      <Button title="Buka Galeri" onPress={openGalleryWithCallback} />
      <Button title="Add" onPress={handleTambahItem} />
      <Button title="Discard" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 38,
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 16,
  },
});
