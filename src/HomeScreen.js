import React from 'react';
import { View, Button, StyleSheet, TouchableOpacity, Text} from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>WELCOME KASIR!</Text>
        <View style = {styles.buttonRow}>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PesananBaru')}>
        <Text style={styles.buttonText}>Pesanan Baru Aghi</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Fasilitas')}>
        <Text style={styles.buttonText}>Fasilitas</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Isian')}>
        <Text style={styles.buttonText}>Isian</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PesananBaru')}>
        <Text style={styles.buttonText}>Pesanan Baru</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
  button: {
    backgroundColor: 'green',
    width: 150,
    height: 150,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },

});
export default HomeScreen;

