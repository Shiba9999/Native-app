// ActionCard component
import React from 'react';
import {Linking, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const ActionCard = () => {
  function openWebsite(websiteLink) {
    Linking.openURL(websiteLink);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() =>
          openWebsite('https://timesofindia.indiatimes.com/business')
        }>
        <Text style={styles.textHeading}>Visit to times of india</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 80, // Adjust the marginTop value based on your layout requirements
    alignItems: 'center', // Center the content horizontally
  },
  textHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'blue',
    padding: 10,
  },
});

export default ActionCard;
