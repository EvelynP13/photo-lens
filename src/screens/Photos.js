import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function PhotosScreen ({ navigation }) {
    return (
        <View style={StyleSheet.PhotosScreen}>
            <Text>Photos screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    PhotosScreen: {
        /* Styles Here */
    },
});