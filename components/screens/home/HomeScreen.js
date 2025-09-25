import React, { useState, useRef, useEffect } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default function HomeScreen() {
  const [messages, setMessages] = useState([])
  const [inputText, setInputText] = useState('')
  const [isBotTyping, setIsBotTyping] = useState(false)
  const flatListRef = useRef()
  const [keyboardHeight, setKeyboardHeight] = useState(0)

  // Scroll to bottom whenever messages change
  useEffect(() => {
    flatListRef.current?.scrollToEnd({ animated: true })
  }, [messages, isBotTyping])

  // Handle keyboard height
  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', (e) => {
      setKeyboardHeight(e.endCoordinates.height)
    })
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardHeight(0)
    })
    return () => {
      showSubscription.remove()
      hideSubscription.remove()
    }
  }, [])

  const handleSend = () => {
    if (inputText.trim() === '') return

    const userMessage = {
      id: Math.random().toString(),
      text: inputText,
      sender: 'user',
    }
    setMessages((prev) => [...prev, userMessage])
    setInputText('')

    setIsBotTyping(true)
    setTimeout(() => {
      setIsBotTyping(false)
      const botMessage = {
        id: Math.random().toString(),
        text: `You said: "${inputText}"`,
        sender: 'bot',
      }
      setMessages((prev) => [...prev, botMessage])
    }, 1200)
  }

  const renderItem = ({ item }) => (
    <View
      style={[
        styles.messageContainer,
        item.sender === 'user' ? styles.userMessage : styles.botMessage,
      ]}
    >
      <Text style={item.sender === 'user' ? styles.userText : styles.botText}>
        {item.text}
      </Text>
    </View>
  )

  const renderBotTyping = () => (
    <View style={[styles.messageContainer, styles.botMessage]}>
      <View style={styles.typingBubble}>
        <View style={styles.dot} />
        <View style={[styles.dot, { marginHorizontal: 4 }]} />
        <View style={styles.dot} />
      </View>
    </View>
  )

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: '#f5f5f5' }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1 }}>
          {messages.length === 0 && !isBotTyping ? (
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>How can I help you?</Text>
            </View>
          ) : (
            <FlatList
              ref={flatListRef}
              data={messages}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              contentContainerStyle={{ padding: 10, flexGrow: 1, justifyContent: 'flex-end' }}
              ListFooterComponent={isBotTyping ? renderBotTyping : null}
              keyboardShouldPersistTaps="handled"
            />
          )}
        </View>
      </TouchableWithoutFeedback>

      <View style={[styles.inputContainer, { marginBottom: keyboardHeight }]}>
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          value={inputText}
          onChangeText={setInputText}
          multiline
          placeholderTextColor="gray"
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Ionicons name="send" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  messageContainer: {
    maxWidth: '80%',
    padding: 12,
    marginVertical: 5,
    borderRadius: 15,
  },
  userMessage: {
    backgroundColor: '#6200ee',
    alignSelf: 'flex-end',
    borderTopRightRadius: 0,
  },
  botMessage: {
    backgroundColor: '#e0e0e0',
    alignSelf: 'flex-start',
    borderTopLeftRadius: 0,
  },
  userText: {
    color: '#fff',
    fontSize: 16,
  },
  botText: {
    color: '#000',
    fontSize: 16,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: '#888',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingBottom: 30,
  },
  input: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingVertical: 14,
    paddingHorizontal: 15,
    borderRadius: 20,
    fontSize: 16,
    marginRight: 10,
    color: 'black',
  },
  sendButton: {
    backgroundColor: '#6200ee',
    borderRadius: 25,
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  typingBubble: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 12,
    backgroundColor: '#e0e0e0',
    maxWidth: '20%',
    alignSelf: 'flex-start',
  },
  dot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#888',
    opacity: 0.8,
  },
})
