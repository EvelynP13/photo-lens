import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <View style={StyleSheet.HomeScreen}>
        <TouchableOpacity onPress={() => navigation.navigate ('Photos')}>
            <Text style={styles.metaDataText}>Browse Photos</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate ('Collections')}>
            <Text style={styles.metaDataText}>Browse Collections</Text>
        </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({ HomeScreen: {
    padding: 20,
},
metaDataText: {
    fontSize: 20,
}
});