import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AudioList from '../screens/AudioList'; // Assuming you have an AudioList component
import Player from '../screens/Player'; // Assuming you have a Player component
import PlayList from '../screens/PlayList'; // Assuming you have a PlayList component

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="AudioList" component={AudioList} />
            <Tab.Screen name="Player" component={Player} />
            <Tab.Screen name="PlayList" component={PlayList} />
        </Tab.Navigator>
    );
};

export default AppNavigator;
