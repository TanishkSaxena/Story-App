import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView, ToastAndroid } from 'react-native';
import * as Permissions from 'expo-permissions';
import {BarCodeScanner} from 'expo-barcode-scanner';
import { TextInput } from 'react-native-gesture-handler';
import firebase from 'firebase';
import db from '../config';


export default class WriteScreen extends React.Component{

    constructor(){
        super();
        this.state={
            scanName:'',
            scanStory:'',
            scanTitle:'',
        }
    }

    sendStory=async()=>{
        db.collection("WriteStory").add({
            Writer:this.state.scanName,
            Story:this.state.scanStory,
            Title:this.state.scanTitle,
        })
    }

render()
{

return(
    <KeyboardAvoidingView behavior="padding" enabled>

    <Text style={{fontSize:40,borderBottomWidth:5}}> WRITE</Text>

    <Text style={{fontSize:20}} 
    > Your Name</Text>
    <TextInput style={{fontSize:25, borderWidth:2.5, margin:5}} multiline numberOfLines={1}
    onChangeText={(text)=>{this.setState({scanName:text})}}
    value={this.state.scanName}/>

    <Text style={{fontSize:20}}
    > Title</Text>
    <TextInput style={{fontSize:25, borderWidth:2.5, margin:5}} multiline numberOfLines={1}
    onChangeText={(text)=>{this.setState({scanTitle:text})}}
    value={this.state.scanTitle}/>

    <Text style={{fontSize:20}}
    > Write Your Story</Text>
    <TextInput style={{fontSize:20, borderWidth:2.5, margin:5}} multiline numberOfLines={10}
    onChangeText={(text)=>{this.setState({scanStory:text})}}
    value={this.state.scanStory}/>
    
    <TouchableOpacity style={{borderWidth:2.5, margin:5}} onPress={()=>
    this.sendStory()}>
        <Text style={{fontSize:20, padding:3.33333}}>Send Your Story</Text>
        </TouchableOpacity>
    </KeyboardAvoidingView>
        )
    }
}