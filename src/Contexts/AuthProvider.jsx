import { createContext, useState } from "react";

export const AuthContext=createContext(null)
const AuthProvider = ({childern}) => {
    const [emailOrPhone,setEmailOrPhone]=useState(null)
    const authInfo={
        setEmailOrPhone
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {childern}
        </AuthContext.Provider>
    );
};

export default AuthProvider;