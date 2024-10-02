import React from 'react';
import { View, Button } from 'react-native';
import { FIREBASE_AUTH } from "../../FirebaseConfig";
import { NavigationProp } from "@react-navigation/native";

interface RouterProps {
    navigation: NavigationProp<any, any>;
}

const List = ({ navigation }: RouterProps) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button title="Open Details" onPress={() => navigation.navigate('Details')} />
            <Button title="Logout" onPress={() => FIREBASE_AUTH.signOut()} />
        </View>
    );
};

export default List;
