import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Login() {
  return (
    <View>
      <View style={styles.cont1}></View>
      <View style={styles.cont2}>
        <Text style={styles.text1}>Get all<Text style={{fontWeight: 'bold', fontStyle:'italic'}}> Professional and Affordable Door </Text>services here!</Text>
        <Text style={styles.text2}>Safe, Secure, Quality and Affordable</Text>
        <TouchableOpacity style={styles.button}>
            <Text style={{textAlign: 'center', fontSize: 17, color: 'blue'}}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    cont1: {
        width: '100%',
        height: '40%',
        backgroundColor: '#fff',
        
    },
    cont2: {
        height: '60%',
        backgroundColor: '#8e3fff',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        padding: 20
    },
    text1: {
        textAlign: 'center',
        fontSize: 25,
        color: '#fff'
    },
    text2: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
        marginTop: 20,
    },
    button: {
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 10,
        width: '80%',
        marginTop: 40,
        marginLeft: 30
    }
})

