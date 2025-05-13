import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNAvigator } from '@react-navigation/stack';
import PhotoScreen from '../screens/Photos';

export default function PhotosNavigator() { 
    const Stack = createStackNAvigator();
    return (
        <Stack.Navigator style={StyleSheet.PhotosNavigator}>
            <StackScreen name="Photos" component={PhotoScreen} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    PhotosNavigator: {
        /* Styles Here */
    },
});