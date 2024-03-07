import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View className=" mt-8 px-2 h-full w-full flex flex-col justify-center items-center bg-yellow-400">
      <Text className="font-sans text-3xl text-red-800">
        native wind working
      </Text>
      <Text className="font-sans text-3xl text-red-800">
        native wind working 
      </Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
