import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert} from 'react-native';

export default function DetailsScreen({ navigation }) {
    const [timeIn, setTimeIn] = useState('');
    const [timeOut, setTimeOut] = useState('');
    const [price, setPrice] = useState();

    const [startHours, startMinutes] = timeIn.split(":").map(Number);
    const [endHours, endMinutes] = timeOut.split(":").map(Number);

    const totalStartMinutes = startHours * 60 + startMinutes;
    const totalEndMinutes = endHours * 60 + endMinutes;
    const sumMinutes = Math.abs(totalEndMinutes - totalStartMinutes);

    const Calculate = () => {
        //Alert.alert("WEE")
        let part = 0, price = 0, houreAll = 0, houre = 0, minute = 0;
        let timeDifferenceInMinutes = 0;
        if (sumMinutes >= 30) {                 //จอดน้อยกว่า 30 นาที่ ไม่คิดค่าบริการ 
            if (startHours >= 21 && endHours < 6) {     //จอดเกิน 3 ทุ่ม แต่ไม่เกิน 6 โมงเช้า
                part = 50;
                console.log("if 0 ==" + houre);
        
            } else if (startHours >= 21 && endHours >= 6) {     //จอดเกิน 3 ทุ่ม แต่เกิน 6 โมงเช้า
                part = 50;
                timeDifferenceInMinutes = Math.abs(totalEndMinutes - 360);
                houreAll = timeDifferenceInMinutes/60;
                houre = Math.floor(houreAll);
                minute = Math.round((houreAll - houre) * 60);
                
                console.log("if 1 ==" + houre);
                if (minute >= 15) {
                    houre += 1;
                }
    
            } else if (startHours >= 6 && endHours >=21 && endHours <= 24) {        //จอดหลัง 6 โมงเช้า แต่เกิน 3 ทุ่มถึงเทียงคืน
                part = 50;
                timeDifferenceInMinutes = Math.abs(totalEndMinutes - totalStartMinutes);
                houreAll = (timeDifferenceInMinutes/60) - (endHours - 21);
                houre = Math.floor(houreAll);
                minute = Math.round((houreAll - houre) * 60);
                
                console.log("if 2 ==" + houre);
                if (minute >= 15) {
                    houre += 1;
                }
    
            } else if (startHours >= 6 && endHours >=1 && endHours < 6) {          //จอดหลัง 6 โมงเช้า แต่เกินเทียงคืนถึง 6 โมงเช้า
                let newHours = 21;
                let newMinutes = 0;
                part = 50;
                houre = Math.abs(startHours - newHours);
                //newMinutes = (startMinutes + endMinutes) / 60;
                // houreAll = timeDifferenceInMinutes/60;
                // houre = Math.floor(houreAll);
                // minute = Math.round((houreAll - houre) * 60);
                
                //console.log("newMinutes =" + newMinutes);
                console.log("if 3 ==" + houre);
                if (endMinutes >= 15) {
                    houre += 1;
                }
            } else {
                timeDifferenceInMinutes = Math.abs(totalEndMinutes - totalStartMinutes);   //จอดหลัง 6 โมงเช้า แต่ไม่เกิน 3 ทุ่ม
                houreAll = timeDifferenceInMinutes/60;
                houre = Math.floor(houreAll);
                minute = Math.round((houreAll - houre) * 60);
        
                console.log("if 4 ==" + houre);
                if (minute >= 15) {
                    houre += 1;
                }
            }
        } else {
            console.log("ไม่คิดค่าบริการ");
        }
        price = (houre * 20) + part;
        setPrice(price);

        console.log("เวลาเดิน = " + timeIn);
        console.log("เวลาหยุด = " + timeOut);
        console.log("ช.ม.รวม = " + houre);
        console.log("ค่าจอดค้างคืน = " + part);
        console.log("ราคา = " + price);
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => navigation.navigate('Home')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Details Screen
            </Text>
            <TextInput style={styles.textInput} 
            onChangeText={(timeIn) => setTimeIn(timeIn)}
            value={timeIn}
            />
            <TextInput style={styles.textInput} 
            onChangeText={(timeOut) => setTimeOut(timeOut)}
            value={timeOut}
            />
            <TouchableOpacity onPress={() => Calculate()} 
            style={{
              backgroundColor: '#097AFF',
              paddingVertical: 10,
              width: '40%',
              borderRadius: 20,
              margin: 10
            }}>
            <Text
              style={{
                fontSize: 20,
                textAlign: 'center',
                color: 'white',
                fontWeight: 'bold',
              }}>
              Calculate
            </Text>
            </TouchableOpacity>
            <Text style={{fontSize: 30, color: 'black', margin: 10}}>
                Price = {price}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        borderColor: '#777',
        padding: 10,
        margin: 10,
        width: 200
    }
}) 