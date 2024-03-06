import {SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import FlatCards from './componnets/FlatCards';
import ElevatedCards from './componnets/ElevatedCards';
import FancyCard from './componnets/FancyCard';
import ActionCard from './componnets/ActionCard';
import ContactList from './componnets/ContactList';
import PasswordGenerator from './componnets/PasswordGenerator';
import RollDice from './componnets/RollDice';
import FlatListDemo from './componnets/FlatListDemo';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElevatedCards />
        <FancyCard />
        <ActionCard />
        <ContactList />
        <PasswordGenerator />
        <RollDice />
      </ScrollView>

      {/* flat list is never br nested under scrollview FlatList is preferred over
      the basic ScrollView for displaying long lists of data because ScrollView
      renders all of its child components at once, leading to performance issues
      with large data sets. */}
      {/* <FlatListDemo /> */}
    </SafeAreaView>
  );
};

export default App;
