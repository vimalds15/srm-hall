import { Link, useNavigation } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet,Image} from 'react-native';
import { registerWithEmailAndPassword } from '../../src/firebase/userAuth';
import Logo from "../../assets/logo.png"
import SelectDropdown from 'react-native-select-dropdown';

const roles=["Faculty","HOD"]

const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');   
  const [role,setRole]=useState('')
  
  const navigation = useNavigation();

  const handleRegister= async() => {
    const res = await registerWithEmailAndPassword(email,password)
    if(res.success===true){
        // ToastAndroid.show("Registered Successfully",ToastAndroid.BOTTOM)
        navigation.navigate("(tabs)",{Screen:"(home)"})
    }
  }

  return (
    <View style={styles.container}>
      <Image style={{height:100,width:100}} source={Logo}/>
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
      <SelectDropdown 
        data={roles}
        onSelect={(val)=>setRole(val)}
        defaultButtonText='Select your role'
        buttonStyle={styles.input}
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
    backgroundColor:"white"
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
