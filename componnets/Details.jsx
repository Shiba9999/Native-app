import {Button, Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Details = ({route, navigation}) => {
  const {product} = route.params;
  console.log('product', product);
  return (
    <>
      <ScrollView style={styles.container}>
        <View>
          <Text style={styles.name}>{product.name}</Text>

          <Image
            source={{uri: product.imageUrl}}
            style={{width: 200, height: 200}}
          />
          <Text style={styles.name}>{product.originalPrice}</Text>
        </View>
      </ScrollView>
      <Button
        style={styles.homeButton}
        onPress={() => navigation.navigate('Home')}
        title="Go to home" // Add this line to set the title as a string
      />
    </>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 18,
    backgroundColor: '#FFFFFF',
  },
  name: {
    marginBottom: 4,
    color: 'black',
    fontSize: 20,
    fontWeight: '500',
  },
  homeButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    marginHorizontal: 10,
    fontWeight: '500',
    color: 'red',
    fontSize: 20,
  },
});
