import './App.css';
import { Route, Routes} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingBar from 'react-top-loading-bar'
import Login from './pages/Login/Login';
import ForgetPassword from './pages/ForgetPassword/ForgetPassword';
import Home from './pages/Home/Home';
import { Authenticate } from './middlewares/Authenticate';
import { AuthRedirect } from './middlewares/AuthRedirect';
import { useContext, useEffect } from 'react';
import { LoaderContext } from './context/LoaderContext';
import Cookies from 'js-cookie';
import axios from 'axios';
import AuthContext from './context/AuthContext';
import { createToast } from './utility/Toast';
import AccountVerify from './AccountVerify/AccountVerify';
import ResetPassword from './pages/ResetPassword/ResetPassword';




function App() {

  // loader context
  const { loaderState, loaderDispatch } = useContext(LoaderContext)

  // auth context
  const { authDispatch } = useContext(AuthContext)

  // get token
  const token = Cookies.get("token")
  
  // let logged in user
 useEffect(() => {

   try {
    
    axios.get('http://localhost:5000/api/user/me', {
      headers : {
        "Authorization" : ` Bearer ${token} `
      }
    })
    .then( res => {

      if( res.data.isVerified ){
        authDispatch({ type : "LOGIN_SUCCESS", payload : res.data })
      }else{
        createToast('Verified your account')
        Cookies.remove('token')
      }

    })
    .catch( error => {
      authDispatch({ type : "LOGOUT" })
    });

   } catch (error) {
    console.log(error);
   }

 }, [token])

  return (
    <>

      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <LoadingBar
        color='#f11946'
        progress={loaderState}
        onLoaderFinished={() => loaderDispatch({ type : "LOADER_END" })}
       />

      <Routes>
          <Route path='/login' element={ <AuthRedirect> <Login /> </AuthRedirect> } />
          <Route path='/forget-password' element={ <ForgetPassword /> } />
          <Route path='/' element={ <Authenticate> <Home />  </Authenticate>} />
          <Route path='user/:id/verify/:token' element={ <AccountVerify /> } />
          <Route path='/reset-password' element={ <ResetPassword /> } />
          <Route path='user/recover/:token' element={ <ResetPassword /> } />
      </Routes>

    </>
  );
}

export default App;
