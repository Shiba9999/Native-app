import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FancyCard = () => {
  console.log('rendering fancy card component');
  return (
    <View style={styles.container}>
      <Text>FancyCard</Text>

      <Image
        source={require('./algo.jpg')}
        resizeMode="cover"
        style={styles.cardImage}
      />
    </View>
  );
};

export default FancyCard;

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
  },
  cardImage: {
    width: 400,
    height: 100,
    paddingHorizontal: 20,
    marginVertical: 40,
  },
});
