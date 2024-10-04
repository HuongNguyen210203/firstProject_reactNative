import React, { useState } from 'react';
import {
    View,
    TextInput,
    ActivityIndicator,
    Button,
    StyleSheet,
    Alert,
    KeyboardAvoidingView,
    Modal,
    Text,
    Pressable
} from 'react-native';
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const auth = FIREBASE_AUTH;

    const signIn = async () => {
        try {
            setLoading(true);
            const response = await signInWithEmailAndPassword(auth, email, password);
            console.log(response);
            // Navigate to the next screen or handle success
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
            // Handle success, maybe navigate or show a message
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
            behavior="height" // 'height' works well for Android to adjust the layout when the keyboard is visible
        >
            <Button
                title="Show Login Modal"
                onPress={() => setModalVisible(true)} // Open modal
            />

            {/* Modal Component */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Login</Text>

                        {/* Email Input */}
                        <TextInput
                            value={email}
                            style={styles.input}
                            placeholder="Email"
                            autoCapitalize="none"
                            onChangeText={setEmail}
                        />

                        {/* Password Input */}
                        <TextInput
                            value={password}
                            style={styles.input}
                            placeholder="Password"
                            secureTextEntry={true}
                            onChangeText={setPassword}
                        />

                        {/* Modal Buttons */}
                        <View style={styles.modalButtons}>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)} // Close modal
                            >
                                <Text style={styles.textStyle}>Cancel</Text>
                            </Pressable>
                            <Pressable
                                style={[styles.button, styles.buttonPrimary]}
                                onPress={signIn} // Sign in action
                            >
                                {loading ? (
                                    <ActivityIndicator size="small" color="#fff" />
                                ) : (
                                    <Text style={styles.textStyle}>Sign in</Text>
                                )}
                            </Pressable>
                        </View>

                        <Pressable
                            onPress={signUp}
                            style={styles.signupLink}
                        >
                            <Text style={styles.signupText}>Don't have an account? Sign up here</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
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
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
        width: '100%',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dim background
    },
    modalView: {
        width: '80%',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 20,
    },
    button: {
        padding: 10,
        borderRadius: 5,
    },
    buttonClose: {
        backgroundColor: '#ccc',
        flex: 1,
        marginRight: 10,
    },
    buttonPrimary: {
        backgroundColor: '#2196F3',
        flex: 1,
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    signupLink: {
        marginTop: 15,
    },
    signupText: {
        color: '#2196F3',
        textDecorationLine: 'underline',
    },
});

export default Login;
