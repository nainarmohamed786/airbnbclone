import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import Home from './screen/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from './screen/SearchScreen';
import ReserveScreen from './screen/ReserveScreen';
import ConfirmScreen from './screen/ConfirmScreen';
import EndScreen from './screen/EndScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    < >
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen name='Home' component={Home} options={{
            headerShown: false
          }} />
          <Stack.Screen name='search' component={SearchScreen} />
          <Stack.Screen name='Reserve' component={ReserveScreen} options={{
            headerShown: false
          }} />
          <Stack.Screen name='confirm' component={ConfirmScreen} />
          <Stack.Screen name='end' component={EndScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style='light' />
    </>
  );
}

const styles = StyleSheet.create({

});
