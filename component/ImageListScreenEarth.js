import React, { useEffect, useLayoutEffect, useState } from 'react';
import { View, Button, FlatList, Image, Text, TextInput } from 'react-native';
import axios from 'axios';

const ImageListScreen = ({ route }) => {
  const [imageList, setImageList] = useState([]);
  const [activeTab, setActiveTab] = useState(1);
  const [lon, setLon] = useState('');
  const [lat, setLat] = useState('');
  const [date, setDate] = useState('');
  const [showFlatList, setShowFlatList] = useState(false);

  const { apiToken } = route.params;

  useLayoutEffect(() => {
    fetchData();
  }, [activeTab, apiToken]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.nasa.gov/planetary/earth/imagery?lon=${lon}&lat=${lat}&date=${date}&api_key=${apiToken}`
      );
      console.log(response.data);
      setImageList(response.data);
      console.log( `https://api.nasa.gov/planetary/earth/imagery?lon=${lon}&lat=${lat}&date=${date}&api_key=${apiToken}`);
      setShowFlatList(true); // Показать FlatList после успешного получения данных
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <View>
        <TextInput
          placeholder="Enter lon"
          value={lon}
          onChangeText={setLon}
        />
        <TextInput
          placeholder="Enter lat"
          value={lat}
          onChangeText={setLat}
        />
        <TextInput
          placeholder="Enter date (YYYY-MM-DD)"
          value={date}
          onChangeText={setDate}
        />
        <Button title="Fetch Images" onPress={fetchData} />
      </View>

      {showFlatList && ( // Условное отображение FlatList
        <FlatList
          data={imageList}
          keyExtractor={(item, index) => `${index}`}
          renderItem={({ item }) => (
            <Image source={{ uri: `https://api.nasa.gov/planetary/earth/imagery?lon=${lon}&lat=${lat}&date=${date}&api_key=${apiToken}`}} style={{ width: 200, height: 200, margin:5 }} />
            
          )}
          numColumns={2}
          contentContainerStyle={{ marginTop: 20 }}
        />
      )}
    </View>
  );
};

export default ImageListScreen;