import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const DATA = [
  {id: '1', title: 'First Item'},
  {id: '2', title: 'Second Item'},
  {id: '3', title: 'Third Item'},
  {id: '4', title: 'Third Item'},
  {id: '5', title: 'Third Item'},
  {id: '6', title: 'Third Item'},
  {id: '7', title: 'Third Item'},

];

const Item = ({title}) => (
  <View>
    <Text>{title}</Text>
  </View>
);

const FlatListDemo = () => {
  return (
    <FlatList
      data={DATA}
      renderItem={({item}) => <Item title={item.title} />}
      keyExtractor={item => item.id}
    />
  );
};

export default FlatListDemo;

const styles = StyleSheet.create({});
