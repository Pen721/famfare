import React, { Component, useState, useCallback, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../styles/styles.js';
import { GiftedChat } from 'react-native-gifted-chat';
import {db} from '../src/config.js';
import { collection, addDoc, query, serverTimestamp } from "firebase/firestore"; 
import { getDatabase, ref, set, onValue } from "firebase/database";
import { server } from '../metro.config.js';

//write things in real time
// function writeUserData(userId, name, email, imageUrl) {
//     console.log("HI")
//     set(ref(db, userId), {
//     username: name,
//     email: email,
//     profile_picture : imageUrl
//   });
// }

// writeUserData("10000", "who", "wtf@gmail.com", "www.wtf.com");
chatId = '00000000001'
NAME = "YOU"
USERNAME="69420"
PROPIC="https://media.istockphoto.com/photos/beaver-isolated-on-a-white-background-picture-id674786674?k=20&m=674786674&s=612x612&w=0&h=tqhcdyS4IlmLi1P33RueZlxMnvrjXBsukqA1tNjcp38="

export default function Chat() {
    const [messages, setMessages] = useState([]);

    //hear back from server
    const starCountRef = ref(db, 'FamilyChat/' + chatId);
    onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    console.log(data);
    });

    //send to server
    function writeChatData(chatId, name, username, propic_url, message) {
        set(ref(db, 'FamilyChat/' + chatId), {
        idx: idx,
        name: name,
        username: username,
        profile_picture : propic_url,
        message: message, 
        time: serverTimestamp(),
    });
    }

    writeUserData(chatId, 'TIM', "tim2024", 'data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==', 'HELLO')
    writeUserData(chatId, 'TIM2', "tim2025", 'data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==', 'HELLO')


    useEffect(() => {
    
      setMessages([
        // {
        //   _id: 1,
        //   text: 'Dad',
        //   createdAt: new Date(),
        //   user: {
        //     _id: 1,
        //     name: 'React Native',
        //     avatar: require("../assets/logowhite.png"),
        //   },
        // },
  
      ])
    }, [])
  
    const onSend = useCallback((messages = []) => {
        console.log("sent a message!")
        writeChatData(chatID, NAME, USERNAME, PROPIC, messages)
        //get data from server
        GiftedChat
    //   setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
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
  
  
  
  // import React, {Component, useState} from 'react';
  // import {
  //   StyleSheet,
  //   Alert,
  //   View,
  //   Text,
  //   Button,
  //   ScrollView,
  //   TextInput,
  //   SafeAreaView
  // } from 'react-native';
  // import CheckBox from 'react-native-check-box';
  // import {db} from '../src/config.js';
  
  // const ToDoItem = ({todoItem: {todoItem: name, done}, id}) => {
  //   const [doneState, setDone] = useState(done);
  //   const onCheck = () => {
  //     setDone(!doneState);
  //     db.ref('/todos').update({
  //       [id]: {
  //         todoItem: name,
  //         done: !doneState,
  //       },
  //     });
  //   };
  //   return (
  //     <View>
  //       <CheckBox
  //         checkBoxColor="skyblue"
  //         onClick={onCheck}
  //         isChecked={doneState}
  //         disabled={doneState}
  //       />
  //       <Text style={[styles.todoText, {opacity: doneState ? 0.2 : 1}]}>
  //         {name}
  //       </Text>
  //     </View>
  //   );
  // };
  
  // export default class Chat extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       items: {},
  //       presentToDo: '',
  //     };
  
  //     this.addItem = this.addItem.bind(this);
  //     this.clearItems = this.clearItems.bind(this);
  //   }
  
  //   componentDidMount() {
  //     db.ref('/todos').on('value', querySnapShot => {
  //       let data = querySnapShot.val() ? querySnapShot.val() : {};
  //       let todoItems = {...data};
  //       this.setState({
  //         items: todoItems,
  //       });
  //     });
  //   }
  
  //   addItem() {
  //     db.ref('/todos').push({
  //       done: false,
  //       todoItem: this.state.presentToDo,
  //     });
  //     Alert.alert('Action!', 'A new To-do item was created');
  
  //     this.setState({presentToDo: ''});
  //   }
  
  //   clearItems() {
  //     db.ref('/todos').remove();
  //   }
  
  //   render() {
  //     let todosKeys = Object.keys(this.state.items);
  //     return (
  //       <SafeAreaView style={{flex: 1}}>
  //       <ScrollView
  //         style={styles.container}
  //         contentContainerStyle={styles.contentContainerStyle}>
  //         <View>
  //           {todosKeys.length > 0 ? (
  //             todosKeys.map(key => (
  //               <ToDoItem
  //                 key={key}
  //                 id={key}
  //                 todoItem={this.state.items[key]}
  //               />
  //             ))
  //           ) : (
  //                 <Text>No items</Text>
  //           )}
  //         </View>
  //         <TextInput
  //           placeholder="Add new todo"
  //           value={this.state.presentToDo}
  //           style={styles.textInput}
  //           onChangeText={e => {
  //             this.setState({
  //               presentToDo: e,
  //             });
  //           }}
  //           onSubmitEditing = {this.addItem}
  //         />
  //         <Button
  //           title="Add new todo item"
  //           onPress={this.addItem}
  //           color="lightgreen"
  //         />
  //         <View style={{marginTop: 20}}>
  //           <Button title="Clear todos" onPress={this.clearItems} color="red" />
  //         </View>
  //       </ScrollView>
  //       </SafeAreaView>
  //     );
  //   }
  
  // }
  
  // const styles = StyleSheet.create({
  //   todoItem: {
  //     flexDirection: 'row',
  //     marginVertical: 10,
  //     alignItems: 'center',
  
  //   },
  //   todoText: {
  //     borderColor: '#afafaf',
  //     paddingHorizontal: 5,
  //     paddingVertical: 7,
  //     borderWidth: 1,
  //     borderRadius: 5,
  //     marginRight: 10,
  //     minWidth: "50%",
  //     textAlign: "center"
  //   },
  // });
  