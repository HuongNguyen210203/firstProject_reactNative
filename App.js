import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, CheckBox } from 'react-native';

export default function App() {
    const [isChecked, setChecked] = useState(false);

    return (
        <View style={styles.container}>
            {/* Nút back */}
            <TouchableOpacity style={styles.backButton}>
                <Text style={styles.backButtonText}>←</Text>
            </TouchableOpacity>



            {/* Tiêu đề đăng nhập */}
            <Text style={styles.title}>Login to your account</Text>

            {/* Input Email */}
            <TextInput
                placeholder="Email"
                style={styles.input}
                keyboardType="email-address"
            />

            {/* Input Password */}
            <TextInput
                placeholder="Password"
                style={styles.input}
                secureTextEntry={true}
            />



            {/* Nút Log in */}
            <TouchableOpacity style={styles.loginButton}>
                <Text style={styles.loginButtonText}>Log in</Text>
            </TouchableOpacity>

            {/* Liên kết Forgot Password */}
            <TouchableOpacity>
                <Text style={styles.forgotPassword}>Forgot the password?</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    backButton: {
        position: 'absolute',
        top: 40,
        left: 20,
    },
    backButtonText: {
        fontSize: 24,
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 15,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    checkbox: {
        marginRight: 8,
    },
    label: {
        fontSize: 16,
    },
    loginButton: {
        backgroundColor: '#FF6B3C',
        width: '100%',
        padding: 15,
        borderRadius: 30,
        alignItems: 'center',
        marginBottom: 20,
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    forgotPassword: {
        color: '#FF6B3C',
        fontSize: 16,
    },
});
