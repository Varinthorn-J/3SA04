import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Weather(props) {
    return (
        <View>
             <Text style = {{fontSize: 30}}> Weather {props.Zipcode} </Text>
        
             <Text style = {{fontSize: 20}}>             {6135512053} </Text>
        

        </View>
       
    );
}
