import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { theme } from "../componet/styles";
import { useState } from "react";


export function SignIn() {
    const {email,setEmail}=useState("")
    const {password,setPassword}=useState("")
    return (
<SafeAreaView>

    <View style={styles.profilePictureContainer}></View>
    
    <View style={styles.signInC0ntainer}>
    <TextInput 
        onChangeText={(value)=>{setEmail(value)}} 
        placeholder="Email" 
        style={styles.emailAndPasswordInputField}
    />
    <TextInput 
        onChangeText={(value)=>{setPassword(value)}}
        placeholder="Password" 
        style={styles.emailAndPasswordInputField}
    />
    <TouchableOpacity 
        onPress={()=>{console.log(password);}} 
        style={[
            styles.emailAndPasswordInputField,
            {backgroundColor:theme.colors.primary},
            ]}
    >
        <Text>Login</Text>
    </TouchableOpacity>
    </View>
</SafeAreaView>
    )
}
const styles=StyleSheet.create({
    emailAndPasswordInputField:{
        padding:4,
        height:40,
        borderRadius:20,borderWidth:2,
        borderColor:theme.colors.primary
},
profilePictureContainer:{
    width
    :50,
    height:50,borderRadius:25,borderWidth:3,
    borderColor:theme.colors.primary,
},
signInC0ntainer:{
    width:"70%",
    height:400

}
})