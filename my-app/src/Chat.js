import React, { Component, useState, useCallback, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../styles/styles.js';
import { GiftedChat } from 'react-native-gifted-chat';
import {db} from './config.js'
import { collection, addDoc, query, serverTimestamp } from "firebase/firestore"; 
import { getDatabase, ref, set, onValue } from "firebase/database";
// import { server } from '../metro.config.js';

index = 0

CHATID = '00000000001'
NAME = "YOU"
USERNAME="69420"
PROPIC="https://media.istockphoto.com/photos/beaver-isolated-on-a-white-background-picture-id674786674?k=20&m=674786674&s=612x612&w=0&h=tqhcdyS4IlmLi1P33RueZlxMnvrjXBsukqA1tNjcp38="
MESSAGE="HELLO"
TIME=serverTimestamp()

//hear back from server
const starCountRef = ref(db, 'FamilyChat/' + CHATID);
onValue(starCountRef, (snapshot) => {
const data = snapshot.val();
index+=1
console.log(index)
});


export default function Chat() {
    const [messages, setMessages] = useState([]);
    
    //hear back from server
    const starCountRef = ref(db, 'FamilyChat/' + CHATID);
    onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    console.log(data['']);
    });

    //send just message to server
        function writeChatData(chatId, name, username, propic_url, message) {
            set(ref(db, 'FamilyChat/' + chatId + '/' + index + '/'), {
            name: name,
            username: username,
            profile_picture : propic_url,
            message: message, 
            time: serverTimestamp(),
        });
            index+=1
        }

    //send to server
    function writeChatData(chatId, name, username, propic_url, message) {
        set(ref(db, 'FamilyChat/' + chatId + '/' + index + '/'), {
        name: name,
        username: username,
        profile_picture : propic_url,
        message: message, 
        time: serverTimestamp(),
    });
        index+=1
    }
    starCountRef.on('child_added', (snapshot) => {
        console.log("YY");
    });

    useEffect(() => {
        console.log("HI")
      setMessages([
        {
          _id: 1,
          text: MESSAGE,
          createdAt: TIME,
          user: {
            _id: 2,
            name: NAME,
            avatar: "https://upload.wikimedia.org/wikipedia/commons/6/6b/American_Beaver.jpg",
          },
        },
  
      ])
    }, [])
      


    //TRYing to make it update messages once someone else sends something: 
    //https://firebase.google.com/docs/database/admin/retrieve-data#node.js_4
    //https://stackoverflow.com/questions/69182479/real-time-database-gifted-chat-rendering-many-times
    //BUT NEITHER IS CURRENTLY WORKING

    // useEffect(() => {
    //     const addMessage = starCountRef.on('child_added', snapshot => {
    //         console.log("YY")
    //         // var y = [];
    //         // y.push({
    //         //     _id: snapshot.val()._id,
    //         //     createdAt: snapshot.val().createdAt,
    //         //     text: snapshot.val().message,
    //         //     user: user,
    //         //   });
    //         // console.log(snapshot.val())
    //         // setMessages(previousMessages => GiftedChat.append(previousMessages, y));
    //     })
    //     // return () => addMessage();
    //   }, [])

    // ref.addChildEventListener(new ChildEventListener() {
    //     @Override
    //     public void onChildAdded(DataSnapshot dataSnapshot, String prevChildKey) {
    //       // New child added, increment count
    //       int newCount = count.incrementAndGet();
    //       System.out.println("Added " + dataSnapshot.getKey() + ", count is " + newCount);
    //     }
      
    //     // ...
    // });

    // useEffect(() => {
    //     const starCountRef = ref(db, 'FamilyChat/' + CHATID).on('child_added', snapshot => {
    //         var y = [];
    //         y.push({
    //             _id: snapshot.val()._id,
    //             createdAt: snapshot.val().createdAt,
    //             text: snapshot.val().message,
    //             user: user,
    //           });
    //         setMessages(previousMessages => GiftedChat.append(previousMessages, y));
    //     })
    //     return () => starCountRef();
    //   }, [])

    // useEffect(() => {
    //   setMessages([
    //     {
    //       _id: 1,
    //       text: MESSAGE,
    //       createdAt: TIME,
    //       user: {
    //         _id: 2,
    //         name: NAME,
    //         avatar: "https://upload.wikimedia.org/wikipedia/commons/6/6b/American_Beaver.jpg",
    //       },
    //     },
  
    //   ])
    // }, [])
  
    const onSend = useCallback((messages = []) => {
        console.log("sent a message!")
        writeChatData(CHATID, NAME, USERNAME, PROPIC, messages)
        //get data from server
        // GiftedChat
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, [])
  
    return (
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    )
  }
