import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Homepage from './screens/homepage/Homepage'
import Playing from './screens/playing/Playing'

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Homepage" component={Homepage} />
        <Stack.Screen name="Playing" component={Playing} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
