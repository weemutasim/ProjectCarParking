import {View, Text, TouchableOpacity, TextInput, StyleSheet, Alert} from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/AntDesign'
//import { getDatabase, ref, onValue, set} from "firebase/database";
import { db } from '../Firebase/firebase';
import { auth } from '../Firebase/firebase';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const Regis = ({navigation}) => {
  const [ShowPassword, setShowPassword] = useState(true);

  const [name, setName] = useState('');
  const [surename, setSurename] = useState('');
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const RegisterUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential);
      Alert.alert('Complete');
      navigation.navigate('MainContainer');
    })
    .catch((err) => {
      console.log(err);
      Alert.alert('Error');
    })
  }
  
  return (
    <View style={{height: '100%', paddingTop: 100, backgroundColor: 'white'}}>
      <Text
        style={{
          fontSize: 24,
          color: 'black',
          marginHorizontal: 50,
          fontWeight: 'bold'
        }}>
        Get Started
      </Text>
      <Text style={{fontSize: 13, marginHorizontal: 50, paddingBottom: 40}}>
        Let's create your account!
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={(name) => setName(name)}
        value={name}
        placeholder='Name'
      />
      <TextInput
        style={styles.input}
        onChangeText={(surename) => setSurename(surename)}
        value={surename}
        placeholder='Surename'
      />
      <TextInput
        style={styles.input}
        onChangeText={(email) => setEmail(email)}
        value={email}
        placeholder='Email'
      />
      <TextInput
        style={styles.input}
        onChangeText={(userName) => setUserName(userName)}
        value={userName}
        placeholder='User Name'
      />
      <TextInput
        style={styles.input}
        onChangeText={(password => {setPassword(password)})}
        value={password}
        placeholder='Password'
        secureTextEntry={ShowPassword}
      />
      <TouchableOpacity onPress={() => setShowPassword(!ShowPassword)} style={styles.eye}> 
      {
        ShowPassword == true ? (
          <Icon name="eye" size={30} color={'#BEBEBE'}></Icon>
        ) : (
          <Icon name="eyeo" size={30} color={'#BEBEBE'}></Icon>
        )
      }
      </TouchableOpacity>
      <View style={{alignItems: 'center', paddingTop: 40}}>
        <TouchableOpacity onPress={(RegisterUser)}
          style={styles.button}>
          <Text
            style={styles.buttonText}>
            Get Started
          </Text>
        </TouchableOpacity>
        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', paddingTop: 5}}>
          <Text style={{fontSize: 14, color: '#000000'}}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={{fontSize: 14, color: '#000000', fontWeight: 'bold'}}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 0.5,
    padding: 15,
    fontSize: 16,
    marginTop: 20,
    borderRadius: 50,
    marginHorizontal: 30
  },
  eye: {
    position: 'absolute', 
    right: 50, 
    paddingTop: 540
  },
  button: {
    backgroundColor: '#097AFF',
    paddingVertical: 20,
    width: '80%',
    borderRadius: 15
  },
  buttonText: {
    fontSize: 16,
    marginHorizontal: 30,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold'
  }
});

export default Regis;
