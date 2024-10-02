import React, { useState } from 'react';
import {
    View,
    TextInput,
    ActivityIndicator,
    Button,
    StyleSheet,
    Alert,
    KeyboardAvoidingView,
    Platform
} from 'react-native';
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const auth = FIREBASE_AUTH;

    const signIn = async () => {
        try {
            setLoading(true);
            const response = await signInWithEmailAndPassword(auth, email, password);
            console.log(response);
            // Optionally, navigate to the next screen or do something after successful login
        } catch (error: any) {
            console.error(error);
            Alert.alert('Sign in failed', error.message);
        } finally {
            setLoading(false);
        }
    };

    const signUp = async () => {
        try {
            setLoading(true);
            const response = await createUserWithEmailAndPassword(auth, email, password);
            console.log(response);
            // Optionally, navigate to the next screen or show a success message
        } catch (error: any) {
            console.error(error);
            Alert.alert('Sign up failed', error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'} // Adjust for iOS and Android
            keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0} // Offset for the keyboard
        >
            <View style={styles.innerContainer}>
                <TextInput
                    value={email}
                    style={styles.input}
                    placeholder="Email"
                    autoCapitalize="none"
                    onChangeText={setEmail}
                />
                <TextInput
                    value={password}
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry={true}
                    onChangeText={setPassword}
                />
                {loading ? (
                    <ActivityIndicator size="large" color="#0000ff" />
                ) : (
                    <><div style={styles.buttonlogin}>
                        <Button title="Login" onPress={signIn} />
                        <Button title="Create Account" onPress={signUp} />
                    </div>
                    </>
                )}
            </View>
        </KeyboardAvoidingView>
    );
};

// Define your styles here
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    innerContainer: {
        flex: 1,
        justifyContent: 'center', // Center content vertically
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
    },
    buttonlogin: {
        height: 80,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "space-between",
        color: 'white',
    },
});

export default Login;
