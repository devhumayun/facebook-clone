import React from 'react'
// import './ForgetPassword.scss'
import AuthFooter from '../../Components/AuthFooter/AuthFooter'
import { useState } from 'react'
import axios from 'axios'
import { createToast } from '../../utility/Toast'

const ResetPassword = () => {

    // use state for forget pass field
    const [email, setEmail] = useState('')

    // handle recover poassword form
    const handleRecoverPassword = async (e) => {

        e.preventDefault()

        try {
            
          await axios.post(`http://localhost:5000/api/user/recover-password`, { email })
          .then( res => {
                

          })
          .catch(err => {

          });


        } catch (error) {
            console.log(error);
        }

    }

  return (
    
    <div className="forget_password_section">

        <div className="forget_password_header">
            <div className="header_items">
                <div className="logo">
                    <span> facebook </span>
                </div>
                <div className="header_link">
                    <div className="form_area">
                        <form action="">
                            <input type="text" className='auth' placeholder='Mobile or Email '/>
                            <input type="text" className='password' placeholder='Password'/>
                            <button type='submit' className='submit_button'> Log in </button>
                        </form>
                    </div>   
                <div className="forget_pass">
                    <a href="#"> Forgotten account? </a>
                </div>         
                </div>
              
            </div>
        </div>

        <div className="forget_password_body">
            <div className="body_item">
              <h2 className='p-3'> Reset your password </h2>
                 <div className="form_body">

                   <form onSubmit={ handleRecoverPassword } action="#" className="form">
                    <input name='password' value={email} onChange={(e) => setEmail(e.target.value)} type="password" className='email_field' placeholder='New Password' />
                    <input name='password' value={email} onChange={(e) => setEmail(e.target.value)} type="password" className='email_field' placeholder='Confirm Password' />
                        <div className="divider"></div>
                    <div className="footer_button">
                        <button type='submit'> Change </button>
                    </div>
                   </form>
                 </div>


            </div>
        </div>

        <div className="forget_password_footer">
            <div className="space"></div>
            <AuthFooter />
        </div>

    </div>
    
  )
    

}

export default ResetPassword