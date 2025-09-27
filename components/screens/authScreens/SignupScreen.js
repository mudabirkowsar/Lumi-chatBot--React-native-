import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Alert,
} from 'react-native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

const SignupScreen = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [nameFocused, setNameFocused] = useState(false);
    const [emailFocused, setEmailFocused] = useState(false);
    const [passwordFocused, setPasswordFocused] = useState(false);
    const [confirmPasswordFocused, setConfirmPasswordFocused] = useState(false);

    const [errors, setErrors] = useState({});

    // Email validation regex
    const validateEmail = (email) => {
        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return regex.test(email);
    };

    const handleSignUp = () => {
        let tempErrors = {};

        if (!name.trim()) tempErrors.name = 'Name is required';
        if (!email.trim()) tempErrors.email = 'Email is required';
        else if (!validateEmail(email)) tempErrors.email = 'Email is invalid';
        if (!password) tempErrors.password = 'Password is required';
        if (!confirmPassword) tempErrors.confirmPassword = 'Confirm Password is required';
        else if (password !== confirmPassword) tempErrors.confirmPassword = 'Passwords do not match';

        setErrors(tempErrors);

        if (Object.keys(tempErrors).length === 0) {
            // All validations passed
            Alert.alert('Success', 'Account created successfully!');
            // You can navigate to Login or Home screen here
            navigation.navigate('LoginScreen');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign Up</Text>

            {/* Name Input */}
            <View style={[styles.inputContainer, nameFocused && { borderColor: '#6200ee' }]}>
                <Icon
                    name="account-outline"
                    size={20}
                    color={nameFocused ? '#6200ee' : '#555'}
                    style={styles.icon}
                />
                <TextInput
                    placeholder="Name"
                    style={styles.input}
                    value={name}
                    onChangeText={setName}
                    onFocus={() => setNameFocused(true)}
                    onBlur={() => setNameFocused(false)}
                    placeholderTextColor="gray"
                />
            </View>
            {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}

            {/* Email Input */}
            <View style={[styles.inputContainer, emailFocused && { borderColor: '#6200ee' }]}>
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
                    placeholderTextColor="gray"
                />
            </View>
            {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

            {/* Password Input */}
            <View style={[styles.inputContainer, passwordFocused && { borderColor: '#6200ee' }]}>
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
                    placeholderTextColor="gray"
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
            {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

            {/* Confirm Password Input */}
            <View style={[styles.inputContainer, confirmPasswordFocused && { borderColor: '#6200ee' }]}>
                <Icon
                    name="lock-outline"
                    size={20}
                    color={confirmPasswordFocused ? '#6200ee' : '#555'}
                    style={styles.icon}
                />
                <TextInput
                    placeholder="Confirm Password"
                    style={styles.input}
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    secureTextEntry={!showConfirmPassword}
                    onFocus={() => setConfirmPasswordFocused(true)}
                    onBlur={() => setConfirmPasswordFocused(false)}
                    placeholderTextColor="gray"
                />
                <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
                    <Icon
                        name={showConfirmPassword ? 'eye-off-outline' : 'eye-outline'}
                        size={20}
                        color={confirmPasswordFocused ? '#6200ee' : '#555'}
                        style={styles.icon}
                    />
                </TouchableOpacity>
            </View>
            {errors.confirmPassword && <Text style={styles.errorText}>{errors.confirmPassword}</Text>}

            {/* Sign Up Button */}
            <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>

            {/* Login Link */}
            <View style={styles.loginContainer}>
                <Text>Already have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
                    <Text style={styles.linkText}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default SignupScreen;

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
        marginBottom: 5,
        paddingHorizontal: 10,
    },
    icon: {
        marginRight: 5,
    },
    input: {
        flex: 1,
        height: 50,
        color: 'black',
    },
    button: {
        backgroundColor: '#6200ee',
        paddingVertical: 15,
        borderRadius: 8,
        marginTop: 15,
        marginBottom: 20,
    },
    buttonText: {
        color: '#fff',
        alignSelf: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    },
    loginContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    linkText: {
        color: '#6200ee',
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
        marginLeft: 5,
        fontSize: 13,
    },
});
