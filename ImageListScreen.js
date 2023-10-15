import React, { useEffect, useLayoutEffect, useState } from 'react';
import { View,Button, FlatList, Image,Text,TouchableOpacity,VirtualizedList } from 'react-native';
import axios from 'axios';


const ImageListScreen = ({ route }) => {
  const [imageList, setImageList] = useState([{url:''}]);
  const [activeTab, setActiveTab] = useState(1);

  const { apiToken } = route.params;
  const renderTabs = () => (
    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 50, marginBottom: 20 }}>
      <Button title="APOD" onPress={() => setActiveTab(1)} style={{ backgroundColor: 'rgb(20,45,140)', padding: 10 }}>
      </Button>
      <Button title="Asteroids" onPress={() => setActiveTab(2)} style={{ backgroundColor: 'rgb(20,45,140)', padding: 10 }}>
      </Button>
      <Button title="Earth" onPress={() => setActiveTab(3)} style={{ backgroundColor: 'rgb(20,45,140)', padding: 10 }}>
      </Button>
      <Button title="Mars" onPress={() => setActiveTab(4)} style={{ backgroundColor: 'rgb(20,45,140)', padding: 10 }}>
      </Button>
      <Button title="Epic" onPress={() => setActiveTab(4)} style={{ backgroundColor: 'rgb(20,45,140)', padding: 10 }}>
      </Button>
    </View>
);
  useLayoutEffect(() => {
    fetchData();
  }, [activeTab,apiToken]);

  const fetchData = async () => {
     let url=``;
    switch (activeTab) {
      case 1:
         url = `https://api.nasa.gov/planetary/apod?count=50&api_key=${apiToken}`;
        break;
      case 2:
         url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-08&end_date=2015-09-11&api_key=${apiToken}`;
        break;
      case 3:
         url = `https://api.nasa.gov/planetary/earth/imagery?lon=100.75&lat=1.5&date=2014-02-01&api_key=${apiToken}`;
        break;
      case 4:
         url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=${apiToken}`;
        break;
        case 5:
            url = `https://api.nasa.gov/EPIC/api/natural/images?api_key=${apiToken}`;
           break;
      default:
        break;
    }
    try {
        const response = await axios.get(
          `${url}`
        );
        console.log(response.data);
        setImageList(response.data);
      } catch (error) {
        console.error(error);
      }
  };
  return (
    <View>
      {renderTabs()}
      
      <FlatList
        data={imageList}
        listkey = {(item, index) => `${index}`}
        
        renderItem={({ item }) => (
            
             <Image source={{ uri: item.url }} style={{ width: 200, height: 200 }} />
             
    
        //<Text>{item.url}</Text>
        )}numColumns={2}
        contentContainerStyle={{ marginTop: 20 }}
      />
    </View>
  );
};

export default ImageListScreen;