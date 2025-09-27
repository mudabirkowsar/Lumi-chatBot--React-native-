import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet, 
} from 'react-native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';


const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [emailFocused, setEmailFocused] = useState(false);
    const [passwordFocused, setPasswordFocused] = useState(false);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>

            {/* Email Input */}
            <View
                style={[
                    styles.inputContainer,
                    emailFocused && { borderColor: '#6200ee' },
                ]}
            >
                <Icon
                    name="email-outline"
                    size={20}
                    color={emailFocused ? '#6200ee' : '#555'}
                    style={styles.icon}
                />
                <TextInput
                    placeholder="Email"
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    onFocus={() => setEmailFocused(true)}
                    onBlur={() => setEmailFocused(false)}
                    placeholderTextColor={"gray"}
                />
            </View>

            {/* Password Input */}
            <View
                style={[
                    styles.inputContainer,
                    passwordFocused && { borderColor: '#6200ee' },
                ]}
            >
                <Icon
                    name="lock-outline"
                    size={20}
                    color={passwordFocused ? '#6200ee' : '#555'}
                    style={styles.icon}
                />
                <TextInput
                    placeholder="Password"
                    style={styles.input}
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={!showPassword}
                    onFocus={() => setPasswordFocused(true)}
                    onBlur={() => setPasswordFocused(false)}
                    placeholderTextColor={"gray"}
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                    <Icon
                        name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                        size={20}
                        color={passwordFocused ? '#6200ee' : '#555'}
                        style={styles.icon}
                    />
                </TouchableOpacity>
            </View>

            {/* Forgot Password Link */}
            <TouchableOpacity
                onPress={() => navigation.navigate('ForgotPassword')}
                style={styles.linkContainer}
            >
                <Text style={styles.linkText}>Forgot Password?</Text>
            </TouchableOpacity>

            {/* Login Button */}
            <TouchableOpacity style={styles.button}
            onPress={()=> navigation.navigate("DrawerScreen")}
            >
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            {/* Signup Link */}
            <View style={styles.signupContainer}>
                <Text>Don't have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}>
                    <Text style={styles.linkText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 40,
        alignSelf: 'center',
        color: '#6200ee',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    icon: {
        marginRight: 5,
    },
    input: {
        flex: 1,
        height: 50,
        color: "black"
    },
    linkContainer: {
        alignSelf: 'flex-end',
        marginBottom: 20,
    },
    linkText: {
        color: '#6200ee',
    },
    button: {
        backgroundColor: '#6200ee',
        paddingVertical: 15,
        borderRadius: 8,
        marginBottom: 20,
    },
    buttonText: {
        color: '#fff',
        alignSelf: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    },
    signupContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
});
