import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import db from '../config';
import { SearchBar } from 'react-native-elements'
import { TextInput } from 'react-native-gesture-handler';

export default class ReadScreen extends React.Component
{

    constructor(props){
        super(props);
        this.state={
            allSubmission:[],
            lastVisibleSubmission:null,
        }
    }

    state = {
        search:''
    }

    updateSearch=async(search)=>{
        this.setState({search});
    }

    fetchMoreSubmissions=async()=>{
        const query = await db.collection("WriteStory")
        .startAfter(this.state.lastVisibleSubmission)
        .limit(0).get()
        query.docs.map((doc)=>{
            this.setState({
                allSubmission:[...this.state.allSubmission,doc.data()],
                lastVisibleSubmission:doc,
            })
        })
    }

    componentDidMount=async()=>{
        const query = await db.collection("WrieStory").limit(10).get()
        query.docs.map((doc)=>{
            this.setState({
                allSubmission:[...this.state.allSubmission,doc.data()],
                lastVisibleSubmission:doc,
            })
        })
    }

    render()
    {
        return(
        <View>

            <Text style={{flex:true,justifyContent:"center",fontSize:40,borderBottomWidth:5}}> READ</Text>

            <SearchBar
                containerStyle={{borderBottomWidth:5}}
                inputContainerStyle={{borderWidth:2}}
                platform="android"
                placeholder="Write Here..."
                onChangeText={this.updateSearch}
                value={this.search}
            ></SearchBar>

            <FlatList data={this.state.allSubmission}
            renderItem={({item})=>{
                <View>
                    <Text>{"Story Name : "+item.scanTitle}</Text>
                    <Text>{"Author Name : "+item.scanName}</Text>
                </View>
            }}
            keyExtractor={(item,index)=>index.toString()}
            onEndReached={this.fetchMoreSubmissions}
            onEndReachedThreshold={0.75}
            ></FlatList>

        </View>
        )
    }
}