import { useContext } from "react"
import { Navigate } from "react-router-dom"
import AuthContext from "../context/AuthContext"

// authenticated user
export const Authenticate = ({ children }) => {

    const {isUserLoggedIn} = useContext(AuthContext)

    return isUserLoggedIn ? children : <Navigate to='/login' />

}