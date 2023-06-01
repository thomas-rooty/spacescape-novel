import { Audio } from 'expo-av'
import { useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Text, View, StyleSheet } from 'react-native'

//const playSound = async () => {
//  try {
//    const { sound } = await Audio.Sound.createAsync(require('../../assets/capysong.mp3'))
//    await sound.playAsync()
//  } catch (error) {
//    console.log('Error occurred while playing sound:', error)
//  }
//}

const Home = () => {
  useEffect(() => {
    //playSound()
  }, [])

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffcd00',
    flex: 1,
    paddingTop: 50,
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
})

export default Home
