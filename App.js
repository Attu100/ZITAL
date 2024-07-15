import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { CartScreen } from './Screens/Cart';
import { Checkout } from './Screens/CheckOut';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './Navigation/StackNavigation';

export default function App() {
  return (
    <View style={styles.container}>
        <NavigationContainer>
          <StackNavigator/>
        </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
