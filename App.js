import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import Login from './app/screens/login';
import List from './app/screens/List';
import Details from './app/screens/Details';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const Stack = createNativeStackNavigator();
const InsideStack = createNativeStackNavigator();

function InsideStackScreen() {
    return (
        <InsideStack.Navigator initialRouteName="List">
            <InsideStack.Screen name='List' component={List} options={{ headerShown: false }} />
            <InsideStack.Screen name='Details' component={Details} options={{ headerShown: false }} />
        </InsideStack.Navigator>
    );
}

export default function App() {
    const [user, setUser] = useState(null);
    const [isChecked, setChecked] = useState(false);

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setChecked(true);
        });

        return () => unsubscribe();
    }, []);

    if (!isChecked) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={user ? "InsideStack" : "Login"}>
                {user ? (
                    <Stack.Screen name='InsideStack' component={InsideStackScreen} options={{ headerShown: false }} />
                ) : (
                    <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
