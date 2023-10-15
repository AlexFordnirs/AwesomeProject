import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [apiToken, setApiToken] = useState('');

  const handlePress = () => {
     if (!apiToken) {
      alert('Please enter a valid API key.');
      return;
    }
    navigation.navigate('TabScrenCat', { apiToken });
  };

  const UnhandlePress = () => {
    setApiToken('');
 };


  return (
    <View>
      <TextInput
        placeholder="Введите свой API токен NASA"
        value={apiToken}
        onChangeText={setApiToken}
        required 
        style={{ backgroundColor: 'rgb(90,75,250)', padding: 20 }}
      /><View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 50, marginBottom: 20 }}>
      <Button title="Login" style={{ backgroundColor: 'rgb(20,45,140)', padding: 10 }} onPress={handlePress} />
      <Button title="Unlogin" style={{ backgroundColor: 'rgb(20,45,140)', padding: 10 }} onPress={UnhandlePress} />
      </View>  
    </View>
  );
};

export default HomeScreen;