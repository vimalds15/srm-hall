import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LH from "../../assets/lh.png"

const HallCard = () => {
  return (
    <View style={styles.container}>
      <Image source={LH} style={{width:"100%"}} />
      <Text style={{marginTop:8,marginLeft:12, marginBottom:10,fontWeight:"bold"}}>Lecture Hall I</Text>
    </View>
  )
}

export default HallCard

const styles = StyleSheet.create({
    container:{
        borderWidth:1,
        borderColor:"gray",
        marginBottom:20,
        borderRadius:8,
        overflow:"hidden",
        width:"100%"
    }
})