import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Redirect } from 'expo-router'
import { AuthProvider } from '../src/features/authContext'

const index = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <AuthProvider value={{isLoggedIn,setIsLoggedIn,currentUser,setCurrentUser}}>
      <Redirect href={'/login'}/>
    </AuthProvider>
  )
}

export default index

const styles = StyleSheet.create({})