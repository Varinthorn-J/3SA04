import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { View, Text, FlatList, TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92120' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
]

const ZipItem = ({ place, code, navigation }) => (
    <TouchableHighlight onPress={() => navigation.navigate('Weather', { zipCode: code })}>
        <View>
            <Text style={styles.backdrop}>{place}</Text>
            <Text style={styles.code}>{code}</Text>
        </View>
    </TouchableHighlight>
)


const _keyExtractor = item => item.code

export default function ZipCodeScreen() {
    const navigation = useNavigation()
    return (
        <View>
            <ImageBackground source={require('./assets/sky.jpg')} style={styles.back}>
                <FlatList
                    data={availableZipItems}
                    keyExtractor={_keyExtractor}
                    renderItem={({ item }) => <ZipItem {...item} navigation={navigation} />}
                />
                <StatusBar style="auto" />

            </ImageBackground>
        </View>
    );

}

const styles = StyleSheet.create({
    backdrop: {
        justifyContent: 'space-around',
        alignItems: 'center',
        fontSize: 35,

        color: 'black',


    },

    back: {

        alignItems: 'center',
        width: '100%',
        height: '100%',

    },
    code: {
        fontSize: 20,
        flex:0.7,
        backgroundColor: 'white',

    },
});
