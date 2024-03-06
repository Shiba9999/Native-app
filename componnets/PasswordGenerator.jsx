import React, {useState} from 'react';
import {View, Switch, Text, Button, StyleSheet, TextInput} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';

const PasswordGenerator = () => {
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeLowercase, setIncludeLowercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState('');

  const generatePassword = () => {
    let chars = '';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+-=[]{}|;:\'",.<>?/';

    if (includeUppercase) chars += uppercase;
    if (includeLowercase) chars += lowercase;
    if (includeNumbers) chars += numbers;
    if (includeSymbols) chars += symbols;

    let generatedPassword = '';
    // const length = 12; // You can make this dynamic
    for (let i = 0; i < passwordLength; i++) {
      generatedPassword += chars.charAt(
        Math.floor(Math.random() * chars.length)
      );
    }

    setPassword(generatedPassword);
  };
  const copyToClipboard = () => {
    Clipboard.setString(password);
    alert('Password copied to clipboard!'); // Optional: Give feedback to the user
  };

  return (
    <View style={styles.container}>
      <View style={styles.option}>
        <Text>Include Uppercase Letters</Text>
        <Switch
          value={includeUppercase}
          onValueChange={() => setIncludeUppercase(prev => !prev)}
        />
      </View>
      <View style={styles.option}>
        <Text>Include Lowercase Letters</Text>
        <Switch value={includeLowercase} onValueChange={setIncludeLowercase} />
      </View>
      <View style={styles.option}>
        <Text>Include Numbers</Text>
        <Switch value={includeNumbers} onValueChange={setIncludeNumbers} />
      </View>
      <View style={styles.option}>
        <Text>Include Symbols</Text>
        <Switch value={includeSymbols} onValueChange={setIncludeSymbols} />
      </View>
      <View style={styles.option}>
        <Text>Password Length</Text>
        <TextInput
          style={styles.inputLength}
          keyboardType="number-pad"
          value={passwordLength}
          placeholder="Password Length"
          onChangeText={setPasswordLength}
        />
      </View>
      <Button title="Generate Password" onPress={generatePassword} />
      <TextInput style={styles.input} value={password} editable={false} />
      <Button title="Copy Password" onPress={copyToClipboard} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
  },
  inputLength: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    width: 100, // Set a fixed width for the password length input
  },
});

export default PasswordGenerator;
