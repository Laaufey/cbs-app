import { FlatList, View, StyleSheet, Modal } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useState } from 'react'
import EventCard from '../components/EventCard';
import colors from '../config/colors';
import Title from '../components/Title';
import MainButton from '../components/MainButton';
import { EVENTS } from '../data';

const HomeScreen = ({ navigation }) => {
// const chatroom = new Chatroom(2, [], '');


    return (
        <View>
        <FlatList 
        data={EVENTS}
        keyExtractor={event => event.id.toString()}
        renderItem={({ item }) => (<EventCard
            image={item.image}
            title={item.title}
            subTitle={item.subTitle}
            date={item.date}
            location={item.location}
            onPress={() => navigation.navigate('View Event', { event: item })}
            />)}/>
        </View>
);}


export default HomeScreen;