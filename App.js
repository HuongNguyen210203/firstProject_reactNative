import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Login from './app/screens/login'; // Make sure the path is correct
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
    const [isChecked, setChecked] = useState(false);
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

// Uncomment and adjust styles as needed
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
    // Add other styles as necessary
});
