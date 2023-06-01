import { Image, View, StyleSheet } from 'react-native'

const Rocket = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/rocket.png')} style={styles.image} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 50,
    right: 0,
  },
  image: {
    width: 120,
    height: 120,
  },
})

export default Rocket
