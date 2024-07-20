import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { theme } from "../componet/styles";
import { useEffect, useState } from "react";
import { Formik } from "formik";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../Firebase/Settings";
import * as yup from "yup"
import { doc, getDoc } from "firebase/firestore";



const validation = yup.object({
    email: yup.string().email("Invalid email").required("email is required"),
    password: yup.string().password("enter your ccorrect password")
})


export function SignIn({navigation}) {
    
    const {email,setEmail}=useState("")
    const {password,setPassword}=useState("")
    

return (
    <SafeAreaView>
    <Formik 
    initialValues={{email:"",password:""}}
    onSubmit={(value)=>{
        signInWithEmailAndPassword(auth, value.email,value.password)
        .then(()=>{
            Alert.alert({email},"Welcome to Zital",
                /* button on alert*/  [ 
                    {
                        text:"Thanks",
                        onPress:()=>{ navigation.navigate("Home")}
                    }
                
            ])
        }) .catch((e)=>console.log(e))
        console.log(value)
    }}
    validationSchema={{}}
    >
        {(property)=>{
            return (
                <View style={styles.signInC0ntainer}>
                <TextInput 
                    style={styles.emailAndPasswordInputField}
                    placeholder="Email" 
                    onChangeText={property.handleChange("email")} 
                    onBlur={property.handleBlur("email")}
                    autoCapitalize="none"
                    autoComplete="off"
                />
                <TextInput 
                    style={styles.emailAndPasswordInputField}
                    placeholder="Email" 
                    onChangeText={property.handleChange("password")} 
                    onBlur={property.handleBlur("password")}
                    autoCapitalize="none"
                    autoComplete="off"
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

            ) 
        }}
       
            <View style={styles.profilePictureContainer}></View>
            
            
    </Formik>
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