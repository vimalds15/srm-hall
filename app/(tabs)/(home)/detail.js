import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from 'expo-router'
import LH from "../../../assets/lh.png"

const detail = () => {
  const navigation = useNavigation()

  useEffect(()=> {
    navigation.setOptions({
        headerTitle:"Lecture Hall I"
    })
  },[])

  return (
    <View style={{padding:15}}>
      <Image source={LH} style={{width:"100%", height:225}} /> 
      <Text style={{marginTop:10, fontWeight:"bold"}}>Lecture Hall I</Text>
      <Text style={{marginTop:10, fontWeight:"bold"}}>Choose the Slot</Text>
      <View style={{flexDirection:"row",flexWrap:"wrap",justifyContent:"space-evenly",rowGap:10,marginTop:20}}>
        <View style={{width:"40%",borderWidth:1,borderColor:"green",alignSelf:"center",padding:10}}>
            <Text style={{textAlign:"center"}}>Hour 1</Text>
            <Text style={{textAlign:"center"}}>8 am - 8:50 am</Text>
        </View>
        <View style={{width:"40%",borderWidth:1,borderColor:"red",alignSelf:"center",padding:10}}>
            <Text style={{textAlign:"center"}}>Hour 1</Text>
            <Text style={{textAlign:"center"}}>8 am - 8:50 am</Text>
        </View>
        <View style={{width:"40%",borderWidth:1,borderColor:"red",alignSelf:"center",padding:10}}>
            <Text style={{textAlign:"center"}}>Hour 1</Text>
            <Text style={{textAlign:"center"}}>8 am - 8:50 am</Text>
        </View>
        <View style={{width:"40%",borderWidth:1,borderColor:"green",alignSelf:"center",padding:10}}>
            <Text style={{textAlign:"center"}}>Hour 1</Text>
            <Text style={{textAlign:"center"}}>8 am - 8:50 am</Text>
        </View>
        
      </View>
    </View>
  )
}

export default detail

const styles = StyleSheet.create({})