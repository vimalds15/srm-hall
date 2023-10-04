import { Link, useNavigation } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { auth } from '../../src/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { registerWithEmailAndPassword } from '../../src/firebase/userAuth';

const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');   
  
  const navigation = useNavigation();

  const handleRegister= async() => {
    const res = await registerWithEmailAndPassword(name,email,password,role)
    if(res.success===true){
        setType("login")
        ToastAndroid.show("Registered Successfully",ToastAndroid.BOTTOM)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
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
      <Button title="Register" onPress={handleRegister} />
      <Text style={styles.text}>Alreay a User? <Link href={'/login'}>Login</Link></Text>
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

export default RegisterScreen;
