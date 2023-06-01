import React from 'react'
import { FlatList, StyleSheet } from 'react-native'
import CharacterCard from '../cards/CharacterCard'

const CharactersList = ({ characters }) => {
  return (
    <FlatList contentContainerStyle={styles.list} data={characters} keyExtractor={(item) => item._id} renderItem={({ item }) => <CharacterCard character={item} />} horizontal />
  )
}

const styles = StyleSheet.create({
  list: {
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
  },
})

export default CharactersList
