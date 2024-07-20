import { createContext, useState } from "react";

export const AppContext = createContext()

export function AppProvider({Children}) {
    
    const {userImage, setUserImage}= useState("");
    const {userID, setUserID}=useState("");
    const {email,setEmail}=useState("")
    const {userInformation, setUserInformation}=useState({fName:"",lName:"",pNumber:"",DOB:"",gender:"",Balance:""});

return (
<AppContext.Provider
value={{
    userImage, setUserImage,
    userID, setUserID,
    email,setEmail,
    userInformation, setUserInformation
}}
>
{Children}
</AppContext.Provider>
)
}