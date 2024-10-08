import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, TouchableOpacity, Image, Modal, Button } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { FIREBASE_AUTH } from "../../FirebaseConfig";
import { Ionicons } from '@expo/vector-icons'; // Dùng icon của Expo

interface RouterProps {
    navigation: NavigationProp<any, any>;
}

const List = ({ navigation }: RouterProps) => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            {/* Search Bar */}
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search music"
                />
                {/* Hamburger icon */}
                <TouchableOpacity style={styles.hamburgerIcon} onPress={() => setModalVisible(true)}>
                    <Ionicons name="menu" size={24} color="black" />
                </TouchableOpacity>
            </View>

            {/* Modal for hamburger menu */}
            <Modal
                visible={modalVisible}
                transparent={true}
                animationType="slide"
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Button title="Open Details" onPress={() => {
                            navigation.navigate('Details');
                            setModalVisible(false);
                        }} />
                        <Button title="Logout" onPress={() => {
                            FIREBASE_AUTH.signOut();
                            setModalVisible(false);
                        }} />
                        <Button title="Close" onPress={() => setModalVisible(false)} />
                    </View>
                </View>
            </Modal>

            {/* Category Filters */}
            <View style={styles.filtersContainer}>
                {['All', 'Album', 'Playlist', 'Artist', 'Explore'].map((filter, index) => (
                    <TouchableOpacity key={index} style={[styles.filterButton, index === 0 && styles.activeFilter]}>
                        <Text style={index === 0 ? styles.activeFilterText : styles.filterText}>{filter}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            {/* Song List */}
            <ScrollView style={styles.songList}>
                {[...Array(10)].map((_, index) => (
                    <View key={index} style={styles.songItem}>
                        <View style={styles.songDetails}>
                            <Text style={styles.songTitle}>Mustafa Jaan E Rehmat Pe Lakhon Salam</Text>
                            <Text style={styles.songArtist}>Atif Aslam, Boss Menn</Text>
                        </View>
                        <TouchableOpacity>
                            <Text style={styles.moreIcon}>⋮</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>

            {/* Now Playing Bar */}
            <View style={styles.nowPlaying}>
                <Image
                    style={styles.songThumbnail}
                    source={{ uri: 'https://example.com/image.jpg' }} // Thay thế bằng URL ảnh thực tế
                />
                <View style={styles.nowPlayingDetails}>
                    <Text style={styles.nowPlayingTitle}>Mustafa Jaan E Rehmat Pe</Text>
                    <Text style={styles.nowPlayingArtist}>Atif Aslam, Boss Menn</Text>
                </View>
                <TouchableOpacity style={styles.playPauseButton}>
                    <Text style={styles.playPauseIcon}>⏸</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    searchContainer: {
        flexDirection: 'row',
        padding: 30,
        backgroundColor: '#f2f2f2',
        alignItems: 'center',
    },
    searchInput: {
        flex: 1,
        height: 40,
        borderRadius: 20,
        paddingHorizontal: 15,
        backgroundColor: '#e6e6e6',
    },
    hamburgerIcon: {
        marginLeft: 10,
    },
    filtersContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingVertical: 10,
        backgroundColor: '#fff',
    },
    filterButton: {
        padding: 10,
        borderRadius: 20,
        backgroundColor: '#e6e6e6',
    },
    activeFilter: {
        backgroundColor: '#f90',
    },
    filterText: {
        color: '#000',
    },
    activeFilterText: {
        color: '#fff',
    },
    songList: {
        flex: 1,
        padding: 10,
    },
    songItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#e6e6e6',
    },
    songDetails: {
        flex: 1,
    },
    songTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
    songArtist: {
        fontSize: 14,
        color: '#888',
    },
    moreIcon: {
        fontSize: 20,
        color: '#888',
    },
    nowPlaying: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#f2f2f2',
    },
    songThumbnail: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    nowPlayingDetails: {
        flex: 1,
    },
    nowPlayingTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
    nowPlayingArtist: {
        fontSize: 14,
        color: '#888',
    },
    playPauseButton: {
        padding: 10,
    },
    playPauseIcon: {
        fontSize: 20,
        color: '#f90',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: 250,
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        alignItems: 'center',
    },
});

export default List;
