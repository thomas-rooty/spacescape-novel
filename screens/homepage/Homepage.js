import React from 'react'
import { ImageBackground, StyleSheet, View } from 'react-native'
import SelectChar from '../../components/selectchar/SelectChar'

const background = require('../../assets/spacescape_banner.png')

const App = () => (
  <View style={styles.container}>
    <ImageBackground source={background} resizeMode="cover" style={styles.image}>
      <SelectChar />
    </ImageBackground>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
})

export default App
