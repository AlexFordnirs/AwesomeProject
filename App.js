import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import TabScrenCat from './TabScrenCat';
import ImageListScreenAPOD from './component/ImageListScreenAPOD';
import ImageListScreenAsteroids from './component/ImageListScreenAsteroids';
import ImageListScreenEarth from './component/ImageListScreenEarth';
import ImageListScreenMars from './component/ImageListScreenMars';
import ImageListScreenEpic from './component/ImageListScreenEpic';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ImageListAPOD" component={ImageListScreenAPOD} />
        <Stack.Screen name="ImageListAsteroids" component={ImageListScreenAsteroids} />
        <Stack.Screen name="ImageListEarth" component={ImageListScreenEarth} />
        <Stack.Screen name="ImageListMars" component={ImageListScreenMars} />
        <Stack.Screen name="ImageListEpic" component={ImageListScreenEpic} />
        <Stack.Screen name="TabScrenCat" component={TabScrenCat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;