import React, { useEffect, useLayoutEffect, useState } from 'react';
import { View, Image, Text, VirtualizedList } from 'react-native';
import axios from 'axios';

const ImageListScreen = ({ route }) => {
  const [imageList, setImageList] = useState([]);

  const { apiToken } = route.params;

  useLayoutEffect(() => {
    fetchData();
  }, [apiToken]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.nasa.gov/EPIC/api/natural/images?api_key=${apiToken}`
      );
      console.log(response.data);
      setImageList(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const formatDate = (dateString) => {
    const [datePart, timePart] = dateString.split(' ');
    const [year, month, day] = datePart.split('-');
    return `${year}/${month}/${day}`;
  };
  const renderImageItem = ({ item }) => {
    const imageUrl = `https://api.nasa.gov/EPIC/archive/natural/${formatDate(item.date)}/png/${item.image}.png?api_key=${apiToken}`;

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image source={{ uri: imageUrl }} style={{ width: 450, height: 450 }} />
      </View>
    );
  };

  return (
    <View>
      <VirtualizedList
        data={imageList}
        keyExtractor={(item) => item.image}
        renderItem={renderImageItem}
        getItemCount={() => imageList.length}
        getItem={(data, index) => data[index]}
      />
    </View>
  );
};

export default ImageListScreen;