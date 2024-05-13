import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { PermissionsAndroid } from 'react-native';

export default function TambahItem({ navigation }) {
  const [namaItem, setNamaItem] = useState('');
  const [hargaItem, setHargaItem] = useState('');

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: "Izin Akses Kamera",
          message: "Aplikasi ini membutuhkan akses ke kamera Anda untuk mengambil foto.",
          buttonNeutral: "Nanti",
          buttonNegative: "Batal",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("Izin kamera diberikan");
        openCamera();
      } else {
        console.log("Izin kamera ditolak");
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const openCamera = async () => {
    try {
      const options = {
        saveToPhotos: true,
        mediaType: 'photo',
        includeBase64: false,
      };
      const response = await launchCamera(options);
      if (response.didCancel) {
        console.log('Batal memilih foto');
      } else if (response.errorMessage) {
        console.log('Error:', response.errorMessage);
      } else {
        console.log('Foto berhasil dipilih:', response.assets[0].uri);
      }
    } catch (error) {
      console.error('Kesalahan saat membuka kamera:', error);
    }
  };

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
      <Button title="Buka Kamera" onPress={requestCameraPermission} />
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
