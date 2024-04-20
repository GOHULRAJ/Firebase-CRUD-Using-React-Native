import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {TextInput, StyleSheet, Text, View, Button} from 'react-native';
import {addDoc, collection, doc, setDoc} from 'firebase/firestore';
import { db } from './components/config';

export default function App() {
  const[username,setUsername]=useState("")
  const[email,setEmail]=useState("")
  
  function create(){
    addDoc(collection(db,"users"),{
      username:username,
      email:email
    }).then(()=>{
      alert("Data Submited Successfully");
    }).catch((error)=>{
      alert(error)
    })
  }
  return (
    <View style={styles.container}>
      <Text>This is my first application in react application</Text>
      
      <TextInput value={username} onChangeText={(username)=>{setUsername(username)}} placeholder='Username' style={styles.textBoxes}></TextInput>
      <TextInput value={email} onChangeText={(email)=>{setEmail(email)}} placeholder='Email' style={styles.textBoxes}></TextInput>
      
      <Button style={styles.btn} title='submit'onPress={create}/>
      <StatusBar  style="auto" />
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBoxes:{
    width:'90%',
    fontSize:18,
    padding: 12,
    marginTop:20,
    borderColor:'gray',
    borderWidth:0.2,
    borderRadius:10,
    borderColor:"blue",
    marginBottom:10
  },
  
  btn:{
    marginTop:20
  }
  
});
