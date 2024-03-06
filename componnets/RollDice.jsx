import {Button, Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

const diceImages = {
  1: require('./assests/One.png'),
  2: require('./assests/Two.png'),
  3: require('./assests/Three.png'),
  4: require('./assests/Four.png'),
  5: require('./assests/Five.png'),
  6: require('./assests/Six.png'),
};
const RollDice = () => {
  const [diceNumber, setDiceNumber] = useState(1);
  function rollDice() {
    const number = Math.floor(Math.random() * 6 + 1);
    setDiceNumber(number);
  }
  return (
    <View style={styles.container}>
      <Image source={diceImages[diceNumber]} style={styles.diceImage} />
      <Button title="Roll" onPress={rollDice} />
      <Text style={styles.textStyle}>
        PerfectRoll and your number is {diceNumber}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  diceImage: {
    width: 100, // Set the width as needed
    height: 100, // Set the height as needed
    marginBottom: 20, // Adjust the margin as needed
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});
export default RollDice;
