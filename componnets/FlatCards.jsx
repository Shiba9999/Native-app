import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>FlatCards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text>Blue</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>Green</Text>
        </View>
        <View style={[styles.card, styles.cardFour]}>
          <Text>orange</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 20,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100,
    borderRadius: 10,
    margin: 8,
  },
  cardOne: {
    backgroundColor: 'red',
  },
  cardTwo: {
    backgroundColor: 'blue',
  },
  cardThree: {
    backgroundColor: 'green',
  },
  cardFour: {
    backgroundColor: 'orange',
  },
});
