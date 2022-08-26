import { useContext } from "react"
import { Navigate } from "react-router-dom"
import AuthContext from "../context/AuthContext"

// authenticated user
export const AuthRedirect = ({ children }) => {

    const {isUserLoggedIn} = useContext(AuthContext)

    return isUserLoggedIn ?   <Navigate to='/' /> : children 

}