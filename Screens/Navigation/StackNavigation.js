import { createStackNavigator } from "@react-navigation/stack"
import { CartScreen } from "../Cart"
import { Checkout } from "../CheckOut"
import { SignIn } from "../SignIn"


const Stack =createStackNavigator()

export function StackNavigator(){
    return (

<Stack.Navigator>
    <Stack.Screen name="SignIn" component = {SignIn} options={{headerShown:true}} />
<Stack.Screen name="CartScreen" component = {CartScreen} options ={{headerShown:true}} />
<Stack.Screen name="CheckOut" component = {Checkout} options ={{headerShown:true}}/>
</Stack.Navigator>
    )
}