import React from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';

function RincianPesanan({ route, navigation }) {
    const { cart, total } = route.params;  // Menerima data dari navigasi

    const updateQuantity = (id, delta) => {
        const newCart = cart.map(item => {
            if (item.id === id) {
                const newQuantity = item.quantity + delta;
                return { ...item, quantity: newQuantity };
            }
            return item;
        });
        // Update cart state di PesananBaru jika diperlukan
    };

    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={cart}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Image source={{ uri: item.image }} style={styles.image} />
                        <View style={styles.itemDetail}>
                            <Text>{item.title}</Text>
                            <Text>Rp. {item.price}/Jam</Text>
                        </View>
                        <View style={styles.quantityContainer}>
                            <TouchableOpacity onPress={() => updateQuantity(item.id, -1)} disabled={item.quantity === 1}>
                                <Text>-</Text>
                            </TouchableOpacity>
                            <Text>{item.quantity}</Text>
                            <TouchableOpacity onPress={() => updateQuantity(item.id, 1)}>
                                <Text>+</Text>
                            </TouchableOpacity>
                        </View>
                        <Text>Total Rp. {item.price * item.quantity}</Text>
                    </View>
                )}
            />
            <Text>Total Harga Rp. {getTotalPrice()}</Text>
            <Button title="Bayar" onPress={() => navigation.navigate('MetodePembayaran')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    itemDetail: {
        flex: 1
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        width: 50,
        height: 50,
        marginRight: 10
    }
});

export default RincianPesanan;