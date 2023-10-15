import React, { useEffect, useLayoutEffect, useState } from 'react';
import { View,Button, FlatList, Image,Text,TouchableOpacity,VirtualizedList } from 'react-native';
import axios from 'axios';


const ImageListScreen = ({ route }) => {
  const [imageList, setImageList] = useState([{url:''}]);
  const [activeTab, setActiveTab] = useState(1);

  const { apiToken } = route.params;

  useLayoutEffect(() => {
    fetchData();
  }, [activeTab,apiToken]);

  const fetchData = async () => {
    try {
        const response = await axios.get(
          `https://api.nasa.gov/planetary/apod?count=50&api_key=${apiToken}`
        );
        console.log(response.data);
        setImageList(response.data);
      } catch (error) {
        console.error(error);
      }
  };
  return (
    <View>
      <FlatList
        data={imageList}
        listkey = {(item, index) => `${index}`}
        
        renderItem={({ item }) => (
            
             <Image source={{ uri: item.url }} style={{ width: 200, height: 200 }} />
        )}numColumns={2}
        contentContainerStyle={{ marginTop: 20 }}
      />
    </View>
  );
};

export default ImageListScreen;