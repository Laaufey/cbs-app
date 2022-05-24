import React from 'react';
import { View, StyleSheet, Text, Image, FlatList } from 'react-native';
import { EVENTS } from '../data';
import EventCard from '../components/EventCard';



function AllEventsScreen({  }) {

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
            />)}/>
    </View>
  )
}

export default AllEventsScreen;