import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Link, useNavigation } from 'expo-router'
import Logo from "../../../assets/logo.png"
import HallCard from '../../../src/components/HallCard'

const home = () => {

  const navigation = useNavigation()

  useEffect(()=>{
    
    navigation.setOptions({
      headerTitle:"",
      headerRight:() => <Text style={{marginRight:15}}>Hi Dennis!</Text>,
      headerLeft:() => (
        <Image source={Logo} style={{marginLeft:15}} />
      )
    })
  })

  return (
    <View style={{flex:1,backgroundColor:"#fff",padding:15}}>
      <Text style={{marginBottom:10,fontSize:20,fontWeight:"bold"}}>Book Your <Text style={{color:"#a69002"}}>Hall</Text></Text>
      <ScrollView>
        <Link href="/detail">
          <HallCard />
        </Link>
      <HallCard />
      <HallCard />
      <HallCard />
      <HallCard />
      <HallCard />
      </ScrollView>
    </View>
  )
}

export default home

const styles = StyleSheet.create({})