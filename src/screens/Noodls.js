import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator, FlatList, Image, RefreshControl } from 'react-native'
import React, { useState, useEffect } from 'react';
import { getRamenRestaurantdetails, getImageData } from '../store/actions/action'
import { useDispatch, useSelector } from 'react-redux'
import { Card, Button, Title, Paragraph, Searchbar, Icon } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { Rating, AirbnbRating } from 'react-native-ratings';
import ImageBlurLoading from 'react-native-image-blur-loading';

import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
MaterialCommunityIcons.loadFont()



const Noodls = ({ navigation }) => {

  const { container, spinnerContainer, card, img, headerContainer, textSize, titleStyle, imgContainer } = styles;
  const sortedImageArray = []
  const [restoData, setRestoData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setfilteredData] = useState([]);
  const [reRenderFlatlist, setReRenderFlatlist] = useState(false);
  const [sortedRestoData, setSortedRestoData] = useState([]);
  const [imgArr, setimgArr] = useState([])
  const [refreshing, setRefreshing] = React.useState(false);

  const dispatch = useDispatch();

  const RestoData = useSelector(state => state.ramenRestaurantdetailsReducer.restaurantdetails);
  const RestoSortData = useSelector(state => state.ramenRestaurantdetailsReducer.restaurantdetails);

  const isLoading = useSelector(state => state.ramenRestaurantdetailsReducer.isLoading);
  const isImageLoading = useSelector(state => state.getRandomImagesUrlReducer.isImageLoading)
  const imageData = useSelector(state => state.getRandomImagesUrlReducer.imageData);


  useEffect(() => {
    dispatch(getRamenRestaurantdetails());
    dispatch(getImageData());
  }, []);

  useEffect(() => {
    if (RestoData && RestoData.length > 0) {
      imageData.map((img) => {
        sortedImageArray.push(img.Image)
      })
      let ran = Math.floor(Math.random() * 8)
      RestoData.forEach((item) => {
        return item["url"] = sortedImageArray[ran]
      })
      setReRenderFlatlist(!reRenderFlatlist)
      setRestoData(RestoData)
      setSortedRestoData(RestoSortData)
      setRestoData(RestoData);

    }
    setReRenderFlatlist(!reRenderFlatlist)

  }, [isLoading, isImageLoading])




  const handleSortbyStars = async () => {
    setReRenderFlatlist(!reRenderFlatlist)
    await RestoSortData.sort((a, b) => a.Stars > b.Stars ? -1 : 1);
    setReRenderFlatlist(!reRenderFlatlist)
    setSortedRestoData(RestoSortData)

  }
  const handleSortbyStarsbyDecending = async () => {
    setReRenderFlatlist(!reRenderFlatlist)
    await RestoSortData.sort((a, b) => a.Stars > b.Stars ? 1 : -1);
    setReRenderFlatlist(!reRenderFlatlist)
    setSortedRestoData(RestoSortData)

  }

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Menu>
          <MenuTrigger >
            <MaterialCommunityIcons name={"filter"} color={'#7373E3'} size={24} />
          </MenuTrigger>
          <MenuOptions style={{ padding: 10 }}>
            <MenuOption onSelect={handleSortbyStars}  >
              <Text style={{}}>Ratings - High to Low</Text>
            </MenuOption>
            <MenuOption onSelect={handleSortbyStarsbyDecending} >
              <Text style={{}}>Ratings - Low to High</Text>
            </MenuOption>
          </MenuOptions>
        </Menu>
      ),
    });
  }, [navigation]);


  const onChangeSearch = query => {

    setReRenderFlatlist(!reRenderFlatlist)
    setSearchQuery(query);

    let filteredData = RestoData.filter((item) => {
      const itemData = `${item.Brand.toUpperCase()}`
      const queryData = `${query.toUpperCase()}`
      return itemData.includes(queryData);
    });
    setfilteredData(filteredData)
    setRestoData(filteredData)
  }

  const onRefresh = () => {
    setRefreshing(true)
    dispatch(getRamenRestaurantdetails());
    dispatch(getImageData());
    setRefreshing(false)
  }
  const handleFlatlist = ({ item, index }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Details', { item: item })}>
      <View style={card}>
        <Card>
          <Card.Content>
            {/* <Image
              thumbnailSource={{ uri: item.url }}
              // loadingIndicatorSource={<ActivityIndicator size="large" color={'#FFF'} />}
              // blurRadius={isLoading ? 10 : 0}
              style={img}
              source={{ uri: item.url }}
              // source={{ uri: `https://s3-ap-southeast-1.amazonaws.com/he-public-data/garlic-noodles-61-700x6802c7f765.jpeg` }}
              resizeMode="cover"
            /> */}
            <View style={imgContainer}>
              <ImageBlurLoading
                blurRadius={isLoading ? 5 : 0}
                thumbnailSource={{ uri: item.url }}
                source={{ uri: item.url }}
                style={img}
                resizeMode="cover"
              />

            </View>
            <View style={headerContainer}>
              <View>
                <Title style={titleStyle}>{item.Brand}</Title>
                <Paragraph style={textSize}>{item.Country}</Paragraph>
              </View>

              <Rating
                imageSize={20}
                jumpValue={0.5}
                startingValue={item.Stars}
                showRating
                // onFinishRating={this.ratingCompleted}
                style={{ paddingVertical: 10 }}
              />
            </View>
          </Card.Content>
        </Card>
      </View>
    </TouchableOpacity >
  )


  let flData = filteredData && (filteredData.length > 0) ? filteredData : RestoData;
  // let flData = filteredData && filteredData.length > 0 ? filteredData : sortedRestoData.length > 0 ? sortedRestoData : RestoData;



  return (
    <View style={container}>
      <Searchbar
        placeholder="Search by Brand Name"
        onChangeText={onChangeSearch}
        value={searchQuery}
        round={true}
        lightTheme={true}
        autoCapitalize='none'
        autoCorrect={false}
      />
      <FlatList
        data={flData}
        renderItem={(item, index) => (
          handleFlatlist(item, index)
        )}
        keyExtractor={(item, index) => `${index}`}
        extraData={reRenderFlatlist}
        refreshControl={<RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          tintColor={'#7373E3'}
          color={'#7373E3'}
        />}
      />
      {isLoading ?
        <View style={spinnerContainer}>
          <ActivityIndicator size="large" color={'#7373E3'} />
        </View>
        :
        null
      }

    </View>
  )
}

export default Noodls

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#ecececec'
  },
  spinnerContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 100,

  },
  card: {
    height: undefined,
    width: '100%',
    marginTop: 20
  },
  img: {
    width: "100%",
    height: 300,
    borderRadius: 5,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textSize: {
    fontSize: 18
  },
  titleStyle: {
    fontSize: 22
  },
  imgContainer: {
    alignItems: 'center'
  }
})




// w
// prim
// tse
//A-
// sapp
//sam
