import { StyleSheet, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function SignUp(){
    return(
        <SafeAreaView>
            <TextInput placeholder="Email" style={ styles.InputFields} />
        </SafeAreaView>
    )
}


const styles=StyleSheet.create({

    InputFields:{
        padding:4,
        height:40,
        borderRadius:20,borderWidth:2,
        borderColor:theme.colors.primary
},




})