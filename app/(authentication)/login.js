import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet,Image, ToastAndroid } from 'react-native';
import Logo from "../../assets/logo.png"
import { Link, useNavigation } from 'expo-router';
import { auth } from '../../src/firebase';
import AuthContext from '../../src/features/authContext';
import { loginWithEmailAndPassword } from '../../src/firebase/userAuth';


const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {setCurrentUser,setIsLoggedIn} = useContext(AuthContext)
  const navigation = useNavigation()

  const handleLogin = async () => {
    const res = await loginWithEmailAndPassword(email,password)
    if(res.success){
      ToastAndroid.show("Logged In Successfully",ToastAndroid.BOTTOM)
      setCurrentUser(res.user)
      setIsLoggedIn(true)
      navigation.navigate('(tabs)',{Screen:'(home)'})
    }
  };

  return (
    <View style={styles.container}>
      <Image style={{height:100,width:100}} source={Logo}/>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
      <Text style={styles.text}>Not a User? <Link href={'/register'}>Register</Link></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    marginTop:20
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  text:{
    marginTop:10
  }
});

export default LoginScreen;
