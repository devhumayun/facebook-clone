import React from 'react'
import './Login.scss'
import { Link, useNavigate } from 'react-router-dom'
import '../Register/Register.scss'
import AuthFooter from '../../Components/AuthFooter/AuthFooter'
import RegistrationModal from '../../Components/Res_Modal/RegistrationModal'
import { useState } from 'react'
import axios from 'axios'
import swal from 'sweetalert'
import cookie from 'js-cookie'
import { useContext } from 'react'
import AuthContext from '../../context/AuthContext'
import { LoaderContext } from '../../context/LoaderContext'
import { createToast } from '../../utility/Toast'



const Login = () => {

    // use navigate
    const navigate = useNavigate();

    // use Auth Context
    const { authDispatch } = useContext(AuthContext);

    // use loader context
    const { loaderDispatch } = useContext(LoaderContext)
        

    // Use State for login fields
    const [ input, setInput ] = useState({
        auth : '',
        password : ''
    });

    // Handle login fields
    const handleLoginFields = (e) => {
        setInput((prev) => ({ ...prev, [e.target.name] : e.target.value }))
    };

    // Handle User Login form
    const handleLoginForm = async (e) => {

        e.preventDefault();

        try {

         await axios.post('http://localhost:5000/api/user/login', { email : input.auth, password : input.password })
         .then( res  => {

            if( res.data.user_info.isVerified ){
                cookie.set('token', res.data.token);
                authDispatch({ type : "LOGIN_SUCCESS", payload : res.data.user_info })
                loaderDispatch({ type : "LOADER_START" })
                navigate('/')
            }else{
                createToast('Are your sure')
            }

         })
         .catch( err => {
            console.log(err);
         });
            
        } catch (error) {
            
        }

    }


  return (

    <>

    <div className="login_section">

        <div className="login_auth">
            <div className="facebook_logo">
                <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="" />
                <span> Facebook helps you connect and share with the people in your life. </span>
            </div>
            <div className="login_from">
            <div className="form_area">
                <form onSubmit={ handleLoginForm } className='form'>
                        <input name='auth' value={ input.auth } onChange={ handleLoginFields } type="text" className='login_fields' placeholder='Email address or phone number'  />
                        <input name='password' value={ input.password } onChange={ handleLoginFields } type="password" className='login_fields'  placeholder='Password'  />
                        <button type='submit' className='login_submit'> Log in </button>
                    </form> 
                    <div className="forget_password">
                        <Link to="/forget-password"> Forgotten Password </Link>
                    </div>
                    <div className="divider"></div>
                    <div className="create_account">
                        <RegistrationModal />
                    </div>
            </div>
            <div className="create_page">
                <span > <a href="#"> Create a Page </a> for a celebrity, brand or business </span>
            </div>
            </div>
        </div>

    </div>

     <AuthFooter />

</>

  )
}

export default Login