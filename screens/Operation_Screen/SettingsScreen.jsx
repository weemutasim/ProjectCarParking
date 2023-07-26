import { signOut } from 'firebase/auth';
import * as React from 'react';
import { View, Text, Alert } from 'react-native';
import { auth } from '../../Firebase/firebase';
import Icon from 'react-native-vector-icons/FontAwesome'

export default function SettingsScreen({ navigation }) {
    const  logOut = () => {
        signOut(auth).then(() => {
            navigation.navigate("Login")
        })
        .catch((error) => {
            Alert.alert("Error")
        })
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                style={{ fontSize: 26, fontWeight: 'bold' }}>Settings Screen
            </Text>
            <Icon style={{position: 'absolute', top: 15, right: 10, padding: 10,}} 
                onPress={(logOut)} name="sign-out" size={40} color={'#BEBEBE'}></Icon>
        </View>
    );
}