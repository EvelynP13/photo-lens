import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <View style={StyleSheet.HomeScreen}>
        <TouchableOpacity onPress={() => navigation.navigate ('Photos')}>
            <Text>Browse Photos</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate ('Collections')}>
            <Text>Browse Collections</Text>
        </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({ HomeScreen: {
    padding: 20
},
});