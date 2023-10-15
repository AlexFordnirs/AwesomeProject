import React, { useEffect, useLayoutEffect, useState } from 'react';
import { View, Button, FlatList, Image, Text, TouchableOpacity, VirtualizedList, TextInput } from 'react-native';
import axios from 'axios';

const ImageListScreen = ({ route }) => {
  const [imageList, setImageList] = useState([]);
  const [startDate, setStartDate] = useState('2015-09-08');
  const [endDate, setEndDate] = useState('2015-09-11');

  const { apiToken } = route.params;

  useLayoutEffect(() => {
    fetchData();
  }, [apiToken, startDate, endDate]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${apiToken}`
      );
      console.log(response.data);
      const nearEarthObjects = response.data.near_earth_objects;
      const flattenedList = Object.keys(nearEarthObjects).reduce((acc, date) => {
        const asteroids = nearEarthObjects[date];
        return [...acc, ...asteroids];
      }, []);
      setImageList(flattenedList);
    } catch (error) {
      console.error(error);
    }
  };

  const renderAsteroidItem = ({ item }) => (
    <TouchableOpacity style={{ backgroundColor: '#ffffff', padding: 10, margin: 10 }}>
      <Text>ID: {item.id}</Text>
      <Text>Name: {item.name}</Text>
      <Text>
        Kilometers: {item.estimated_diameter.kilometers.estimated_diameter_min} - {item.estimated_diameter.kilometers.estimated_diameter_max}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View>
      <View style={{ flexDirection: 'row' }}>
        <TextInput
          placeholder="Start Date (YYYY-MM-DD)"
          value={startDate}
          onChangeText={setStartDate}
          style={{ flex: 1, backgroundColor: 'rgb(90,75,250)', padding: 20 }}
        />
        <TextInput
          placeholder="End Date (YYYY-MM-DD)"
          value={endDate}
          onChangeText={setEndDate}
          style={{ flex: 1, backgroundColor: 'rgb(90,75,250)', padding: 20 }}
        />
        <Button title="Fetch Data" onPress={fetchData} />
      </View>
      <FlatList
        data={imageList}
        keyExtractor={(item, index) => `${index}`}
        renderItem={renderAsteroidItem}
        contentContainerStyle={{ marginTop: 20 }}
      />
    </View>
  );
};

export default ImageListScreen;