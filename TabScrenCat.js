import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const TabScrenCat = ({ navigation,route }) => {
    const { apiToken } = route.params;


const handlePressAPOD = () => {
    if (!apiToken) {
     alert('Please enter a valid API key.');
     return;
   }
   navigation.navigate('ImageListAPOD', { apiToken });
 };
 const handlePressAsteroids = () => {
  if (!apiToken) {
   alert('Please enter a valid API key.');
   return;
 }
 navigation.navigate('ImageListAsteroids', { apiToken });
};
const handlePressEarth = () => {
  if (!apiToken) {
   alert('Please enter a valid API key.');
   return;
 }
 navigation.navigate('ImageListEarth', { apiToken });
};
const handlePressMars = () => {
  if (!apiToken) {
   alert('Please enter a valid API key.');
   return;
 }
 navigation.navigate('ImageListMars', { apiToken });
};
const handlePressEpic = () => {
  if (!apiToken) {
   alert('Please enter a valid API key.');
   return;
 }
 navigation.navigate('ImageListEpic', { apiToken });
};



  return (
    <View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 50, marginBottom: 20 }}>
      <Button title="APOD" onPress={handlePressAPOD} style={{ backgroundColor: 'rgb(20,45,140)', padding: 10 }}>
      </Button>
      <Button title="Asteroids" onPress={handlePressAsteroids} style={{ backgroundColor: 'rgb(20,45,140)', padding: 10 }}>
      </Button>
      <Button title="Earth" onPress={handlePressEarth} style={{ backgroundColor: 'rgb(20,45,140)', padding: 10 }}>
      </Button>
      <Button title="Mars" onPress={handlePressMars} style={{ backgroundColor: 'rgb(20,45,140)', padding: 10 }}>
      </Button>
      <Button title="Epic" onPress={handlePressEpic} style={{ backgroundColor: 'rgb(20,45,140)', padding: 10 }}>
      </Button>
      </View>
      
    </View>
  );
};

export default TabScrenCat;