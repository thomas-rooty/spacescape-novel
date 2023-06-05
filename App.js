import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Homepage from './screens/homepage/Homepage'
import Playing from './screens/playing/Playing'
import Login from './screens/login/Login'
import Crud from './screens/crud/Crud'
import AddScenario from './screens/crud/AddScenario'
import ManageScenarios from './screens/crud/ManageScenarios'
import AddAdmin from './screens/crud/AddAdmin'

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
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Crud" component={Crud} />
        <Stack.Screen name="AddScenario" component={AddScenario} />
        <Stack.Screen name="ManageScenarios" component={ManageScenarios} />
        <Stack.Screen name="AddAdmin" component={AddAdmin} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
