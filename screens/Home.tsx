import { View, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'

const Home = ({navigation}: {navigation: any}) => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <Text style={{fontSize: 50}}>Home</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Icon name='home' size={60}></Icon>
      </TouchableOpacity>
    </View>
  )
}

export default Home