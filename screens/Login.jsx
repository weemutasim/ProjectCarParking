import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../Firebase/firebase';

const Login = ({navigation}) => {
  const [ShowPassword, setShowPassword] = React.useState(true);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const SingInUser = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential);
      //Alert.alert('Complete');
      navigation.navigate('Operation_Screen');
    })
    .catch((err) => {
      Alert.alert('Password invalid');
      console.log(err);
    })
  }

  return (
    <View style={{height: '100%', paddingTop: 100, backgroundColor: 'white'}}>
      <Text style={styles.text}>
        <Text style={styles.text}>
          Glad to see you! 
        </Text>
      </Text>
        <View style={{paddingTop: 50}}>
            <Text style={styles.lable}>Email Address</Text>
            <TextInput
            style={styles.input}
            onChangeText={(email) => setEmail(email)}
            value={email}
            placeholder='Email Address'
            />
            <Text style={styles.lable}>Password
            </Text>
            <TextInput
            style={styles.input}
            onChangeText={(password => setPassword(password))}
            value={password}
            placeholder='Password'
            secureTextEntry={ShowPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!ShowPassword)}
            style={{position: 'absolute', right: 50, paddingTop: 195}}>
              {
                ShowPassword == true ? (
                  <Icon name="eye" size={30} color={'#BEBEBE'}></Icon>
                ) : (
                  <Icon name="eyeo" size={30} color={'#BEBEBE'}></Icon>
                )
              } 
              
            </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Text style={{color: '#000000', textAlign: 'right', paddingRight: 40}}>Forgot Password?</Text>
        </TouchableOpacity>
        <View style={{alignItems: 'center', paddingTop: 170}}>
        <TouchableOpacity onPress={(SingInUser)}
          style={{
            backgroundColor: '#097AFF',
            paddingVertical: 20,
            width: '80%',
            borderRadius: 15
          }}>
          <Text
            style={{
              fontSize: 20,
              marginHorizontal: 30,
              textAlign: 'center',
              color: 'white',
              fontWeight: 'bold',
            }}>
            Login
          </Text>
        </TouchableOpacity>
        <View style={{flexDirection: 'row', display: 'flex', justifyContent: 'center', paddingTop: 5}}>
          <Text style={{fontSize: 14, color: '#000000'}}>Don't have an account ? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Regis')}>
            <Text style={{fontSize: 14, fontWeight: 'bold', color: '#000000'}}>Sign Up </Text>
          </TouchableOpacity>
          <Text style={{fontSize: 14, color: '#000000'}}>Now</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    text: {
        textAlign: 'center', 
        fontSize: 24, 
        fontWeight: 'bold', 
        color: '#000000'
    },
    input: {
        borderWidth: 0.5,
        padding: 15,
        fontSize: 16,
        marginTop: 10,
        borderRadius: 50,
        marginHorizontal: 30,
        marginBottom: 10
    },
    lable: {
        fontSize: 16, 
        marginHorizontal: 40,
        color: '#000000'
    }
})
export default Login