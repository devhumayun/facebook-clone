import React from 'react'
import './ForgetPassword.scss'
import AuthFooter from '../../Components/AuthFooter/AuthFooter'
import { useState } from 'react'
import axios from 'axios'
import { createToast } from '../../utility/Toast'

const ForgetPassword = () => {

    // use state for forget pass field
    const [email, setEmail] = useState('')

    // meassege state
    const [msg, setMsg] = useState({
        type : '',
        msg : '',
        status : false
    });

    // handle recover poassword form
    const handleRecoverPassword = async (e) => {

        e.preventDefault()

        try {
            
          await axios.post(`http://localhost:5000/api/user/recover-password`, { email })
          .then( res => {
                
            setMsg({
                type : 'success',
                msg : 'Recovery Link send on your mail',
                status : true
            })

          })
          .catch(err => {
                setMsg({
                    type : 'danger',
                    msg : 'Invalid Email',
                    status : true
                })
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
                
                 <div className="title">
                     <h4> Find Your Account</h4>
                 </div>
                 <div className="desc">
                    <p> Please enter your email address or mobile number to search for your account. </p>
                 </div>

                    <div className="form_body">
                       <div className="aler_box">
                       {
                         msg.status &&  <p className={`alert alert=${msg.type}`}> { msg.msg } </p>
                         
                       }
                       </div>
                   <form onSubmit={ handleRecoverPassword } action="#" className="form">
                    <input name='email' value={email} onChange={(e) => setEmail(e.target.value)} type="text" className='email_field' placeholder='Email Address or Mobile Number' />
                        <div className="divider"></div>
                    <div className="footer_button">
                        <a href="#"> Cancel </a>
                            <button type='submit'> Search </button>
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

export default ForgetPassword