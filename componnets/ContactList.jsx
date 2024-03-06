import {useEffect, useState} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ContactList = () => {
  const [users, setUsers] = useState([]);

  async function fetchUserData() {
    try {
      const response = await fetch('https://dummyjson.com/users');
      const data = await response.json();

      if (data && data.users) {
        setUsers(data.users);
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container} horizontal>
      {users.length > 0 ? (
        users.map(user => (
          <View key={user.id} style={styles.userItem}>
            <Text>{user.firstName}</Text>
            <Image source={{uri: user.image}} style={styles.userImage} />
          </View>
        ))
      ) : (
        <Text>Loading...</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  userItem: {
    marginBottom: 20,
    alignItems: 'center',
  },
  userImage: {
    width: 100,
    height: 100,
    marginTop: 10,
    borderRadius: 50, // Add borderRadius for a circular image (adjust as needed)
  },
});

export default ContactList;
