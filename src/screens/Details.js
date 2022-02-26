import { StyleSheet, View, Image, ScrollView } from 'react-native'
import React from 'react'
import { Card, Button, Title, Paragraph } from 'react-native-paper';
import { Rating, AirbnbRating } from 'react-native-ratings';
import SmallCard from '../components/SmallCard';
import ImageBlurLoading from 'react-native-image-blur-loading'

const Details = ({ route, navigation }) => {
    const { item } = route.params;
    const { scrollContainer, container, cardContainer, imgStyle, imgContainer, headerContainer, ratingStyle, textSize, titleStyle } = styles;
    return (
        <ScrollView style={scrollContainer}>
            <View style={container}>
                <View style={cardContainer}>
                    <Card>
                        <Card.Content>
                            {/* <Image
                                style={imgStyle}
                                // source={{ uri: `${item.url}` }}
                                source={{ uri: item.url }}
                                resizeMode="cover"
                            /> */}
                            <View style={imgContainer}>
                                <ImageBlurLoading
                                    thumbnailSource={{ uri: item.url }}
                                    source={{ uri: item.url }}
                                    style={imgStyle}
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
                                    onFinishRating={this.ratingCompleted}
                                    style={ratingStyle}
                                />
                            </View>
                        </Card.Content>
                        <View style={{}}>
                            <SmallCard name={"Brand"} value={item.Brand} color={'#ececec'} />
                            <SmallCard name={"Country"} value={item.Country} color={'#fff'} />
                            <SmallCard name={"Variety"} value={item.Variety} color={'#ececec'} />
                            <SmallCard name={"Style"} value={item.Style} color={'#fff'} />
                            <SmallCard name={"Top Ten"} value={item["Top Ten"]} color={'#ececec'} />
                            <SmallCard name={"Country"} value={item.Country} color={'#fff'} />
                        </View>
                    </Card>
                </View>
            </View >
        </ScrollView>
    )
}

export default Details
const styles = StyleSheet.create({
    scrollContainer: {
        flex: 1
    },
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#ecececec'
    },
    cardContainer: {
        height: undefined,
        width: '100%',
    },
    imgContainer: {
        alignItems: 'center'
    },
    imgStyle: {
        width: "100%",
        height: 300,
        borderRadius: 5
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    ratingStyle: {
        paddingVertical: 10
    },
    textSize: {
        fontSize: 18
    },
    titleStyle: {
        fontSize: 22
    },

})
