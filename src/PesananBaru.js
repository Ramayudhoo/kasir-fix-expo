import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import RincianPesanan from './RincianPesanan';

const DATA = [
  { id: '1', title: 'MOBIL LISTRIK', price: 10000, image: 'path_to_image' },
  // Tambahkan data lainnya sesuai kebutuhan
];

const Stack = createNativeStackNavigator();

function PesananBaru({ navigation }) {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  
  const updateCart = (newCart) => {
    setCart(newCart);
  };


  const addToCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      // Jika item sudah ada, tingkatkan kuantitasnya
      const updatedCart = cart.map(cartItem => {
        if (cartItem.id === item.id) {
          return { ...cartItem, quantity: (cartItem.quantity || 1) + 1 };
        }
        return cartItem;
      });
      setCart(updatedCart);
    } else {
      // Jika item belum ada, tambahkan ke cart dengan kuantitas awal 1
      setCart([...cart, { ...item, quantity: 1 }]);
    }
    setTotal(total + item.price);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.itemContainer} onPress={() => addToCart(item)}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.price}>Rp. {item.price}/1 Jam</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
      <TouchableOpacity style={styles.footer} onPress={() => navigation.navigate('RincianPesanan', { cart: cart, total: total })}>
        <Text style={styles.footerText}>{cart.length} Items - Rp. {total}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#f9c2ff',
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  title: {
    fontSize: 16,
  },
  price: {
    fontSize: 14,
  },
  footer: {
    padding: 20,
    margin:25,
    marginBottom: 50,
    borderRadius: 10,
    backgroundColor: 'green',
    alignItems: 'center',
  },
  footerText: {
    color: 'white',
    fontSize: 16,
  }
});

export default PesananBaru;