import React, { Component } from 'react';
import { View, Text, Image, TextInput } from 'react-native';
import { Card, CardSection, Button } from './common';


const AlbumDetail = (props) => {

    const { thumbnailImageStyle, headerContentStyle, headerTextStyle, thumbnailImageContainerStyle, imageStyle } = styles;
    const { title, artist, thumbnail_image, image } = props.album;
    return (
        <Card>
            <CardSection>
                <View style={thumbnailImageContainerStyle}>
                    <Image style={thumbnailImageStyle} source={{ uri: thumbnail_image }} />
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}> {title} </Text>
                    <Text> {artist} </Text>
                </View>

            </CardSection>
            <CardSection>

                <Image style={imageStyle} source={{ uri: image }} />
            </CardSection>
            <CardSection>
                <TextInput style={{flex: 1.5}} />
                <Button>
                </Button>
            </CardSection>
        </Card>
    );

};
const styles = {
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailImageContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    }, headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'

    },
    thumbnailImageStyle: {
        height: 50,
        width: 50
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
};

export default AlbumDetail;
