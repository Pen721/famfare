import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import {getAuth} from "firebase/auth"
import { collection, addDoc, getDoc } from "firebase/firestore"; 


export default function Chat() {
  const [messages, setMessages] = useState([]);
  const auth = getAuth();

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    const{
      _id,
      createdAt,
      text,
      user
    } = messages[0]

  }, [])

  return (
    <GiftedChat
      messages={messages}
      // showAvatarForEveryMessage={true}
      onSend={messages => onSend(messages)}
      user={{
        _id: auth?.currentUser?.email,
      }}
    />
  )
}