import { useReducer } from "react";
import AuthContext from "../context/AuthContext";
import { AuthReducer, Auth_INI } from "../reducer/AuthReducer";


// Auth Context Provider
export const AuthContextProvider = ({ children }) => {

    const [ authState, authDispatch ] = useReducer( AuthReducer, Auth_INI )

   return(

    <AuthContext.Provider
        value={{
            isUserLoggedIn: authState.isUserLoggedIn,
            user_info : authState.user_info,
            authDispatch
        }}
    >
       { children }
    </AuthContext.Provider>

   );

}