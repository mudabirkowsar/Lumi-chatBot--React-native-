import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import HomeScreen from '../home/HomeScreen'
import HistoryScreen from '../home/HistoryScreen'
import { Ionicons } from '@expo/vector-icons'
import LinearGradient from 'react-native-linear-gradient'
import NewChatScreen from '../home/NewChatScreen'

const Drawer = createDrawerNavigator()

// Custom Drawer for Chatbot App
function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1, backgroundColor: '#121212' }}>
            <LinearGradient colors={['#6200ee', '#9c27b0']} style={styles.profileContainer}>
                <Image
                    source={require('../../../assets/profile/p3.png')}
                    style={styles.profileImage}
                />
                <Text style={styles.profileName}>John Doe</Text>
                <Text style={styles.profileEmail}>johndoe@example.com</Text>
            </LinearGradient>

            {/* Drawer Items */}
            <View style={styles.drawerItemContainer}>
                <DrawerItemList {...props} />
            </View>

            {/* Bottom Logout Button */}
            <View style={styles.footerContainer}>
                <TouchableOpacity style={styles.logoutButton} activeOpacity={0.7}>
                    <Ionicons name="log-out-outline" size={22} color="#fff" />
                    <Text style={styles.logoutText}>Profile</Text>
                </TouchableOpacity>
            </View>
        </DrawerContentScrollView>
    )
}

export default function DrawerNavigation() {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={{
                headerShown: true,
                headerStyle: { backgroundColor: '#6200ee' },
                headerTintColor: '#fff',
                headerTitleStyle: { fontWeight: 'bold', fontSize: 20 },
                drawerStyle: { backgroundColor: '#121212', width: 270 },
                drawerLabelStyle: { fontSize: 16, marginLeft: -10, color: '#fff' },
                drawerActiveTintColor: '#fff',
                drawerActiveBackgroundColor: '#6200ee',
                drawerInactiveTintColor: '#bbb',
            }}
        >
            <Drawer.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    title: "Lumi",
                    drawerIcon: ({ color }) => <Ionicons name="chatbubble-outline" size={22} color={color} />,
                }}
            />

            <Drawer.Screen
                name="NewChat"
                component={NewChatScreen}
                options={{
                    title: "New Chat",
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="add-circle-outline" size={size || 22} color={color} />
                    ),
                }}
            />

            <Drawer.Screen
                name="HistoryScreen"
                component={HistoryScreen}
                options={{
                    title: "Chat History",
                    drawerIcon: ({ color }) => <Ionicons name="time-outline" size={22} color={color} />,
                }}
            />
        </Drawer.Navigator>
    )
}

const styles = StyleSheet.create({
    profileContainer: {
        paddingVertical: 40,
        alignItems: 'center',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        marginBottom: 15,
    },
    profileImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 2,
        borderColor: '#fff',
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
    },
    profileName: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    profileEmail: {
        color: '#ddd',
        fontSize: 14,
    },
    drawerItemContainer: {
        flex: 1,
        paddingTop: 10,
    },
    footerContainer: {
        padding: 20,
        borderTopWidth: 1,
        borderTopColor: '#333',
    },
    logoutButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#9c27b0',
        paddingVertical: 12,
        paddingHorizontal: 15,
        borderRadius: 10,
    },
    logoutText: {
        color: '#fff',
        fontSize: 16,
        marginLeft: 10,
        fontWeight: 'bold',
    },
})
