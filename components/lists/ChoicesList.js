import { FlatList, StyleSheet } from 'react-native'
import { ChoiceButton } from '../buttons/ChoiceButton'

const ChoicesList = ({ choices, onPress }) => {
  return (
    <FlatList
      contentContainerStyle={styles.list}
      data={choices}
      columnWrapperStyle={{ justifyContent: 'space-between' }}
      renderItem={({ item }) => <ChoiceButton onPress={onPress} choice={item} />}
      numColumns={2}
    />
  )
}

const styles = StyleSheet.create({
  list: {
    justifyContent: 'space-around',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
})

export default ChoicesList
