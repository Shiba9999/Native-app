import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const ProductItem = ({product}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: product.imageUrl}} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  container: {
    margin: 8,
    flexDirection: 'column',
  },
  image: {
    width: 90,
    height: 150,
    resizeMode: 'contain',

    marginRight: 12,
  },
  name: {
    marginBottom: 4,
    color: 'black',
    fontSize: 20,
    fontWeight: '500',
  },
});
