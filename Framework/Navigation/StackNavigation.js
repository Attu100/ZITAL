import { createStackNavigator } from "@react-navigation/stack"
import { CartScreen } from "../Screens/Cart"
import { Checkout } from "../Screens/CheckOut"
import { SignIn } from "../Screens/SignIn"

const Stack =createStackNavigator()

export function StackNavigator(){
    return (

<Stack.Navigator initialRouteName="SignIn" >
    <Stack.Screen name="SignIn" component = {SignIn} options={{headerShown:true}} />
    <Stack.Screen name="CartScreen" component = {CartScreen} options ={{headerShown:true}} />
    <Stack.Screen name="CheckOut" component = {Checkout} options ={{headerShown:true}}/>
</Stack.Navigator>
    )
}