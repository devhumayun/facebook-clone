import React from 'react'
import './AuthFooter.scss'

const AuthFooter = () => {
  return (
    
    <div className="auth_footer_section">
        
        <div className="language_section">
            <ul>
                <li> <a href="#"> English (UK) </a> </li>
                <li> <a href="#"> বাংলা </a> </li>
                <li> <a href="#"> অসমীয়া </a> </li>
                <li> <a href="#"> हिन्दी </a> </li>
                <li> <a href="#"> नेपाली </a> </li>
                <li> <a href="#"> Bahasa Indonesia </a> </li>
                <li> <a href="#"> العربية </a> </li>
                <li> <a href="#"> 中文(简体) </a> </li>
                <li> <a href="#"> Bahasa Melayu </a> </li>
                <li> <a href="#"> Español </a> </li>
                <select className='select_language' name="" id="">
                    <option value="">+</option>
                </select>
            </ul>
        </div>
        <div className="menu_section">
            <ul>
                <li> <a href="#"> Sign Up </a> </li>
                <li> <a href="#"> Log in </a> </li>
                <li> <a href="#"> Messenger </a> </li>
                <li> <a href="#"> Facebook Lite </a> </li>
                <li> <a href="#"> Watch </a> </li>
                <li> <a href="#"> Places </a> </li>
                <li> <a href="#"> Games </a> </li>
                <li> <a href="#"> Marketplace </a> </li>
                <li> <a href="#"> Facebook Pay </a> </li>
                <li> <a href="#"> Oculus </a> </li>
                <li> <a href="#"> Portal </a> </li>
                <li> <a href="#"> Instagam </a> </li>
                <li> <a href="#"> Bulletin </a> </li>
                <li> <a href="#"> Local </a> </li>
                <li> <a href="#"> Fundraisers </a> </li>
                <li> <a href="#"> Services </a> </li>
                <li> <a href="#"> Voliting Information Center </a> </li>
                <li> <a href="#"> Groups </a> </li>
                <li> <a href="#"> About </a> </li>
                <li> <a href="#"> Create ad </a> </li>
                <li> <a href="#"> Create Page </a> </li>
                <li> <a href="#"> Developers </a> </li>
                <li> <a href="#"> Careers </a> </li>
                <li> <a href="#"> Privacy </a> </li>
                <li> <a href="#"> Cookies </a> </li>
                <li> <a href="#"> AdChoices </a> </li>
                <li> <a href="#"> Terms </a> </li>
                <li> <a href="#"> Help </a> </li>
                <li> <a href="#"> Contact uploading and non-users </a> </li>
            </ul>
        </div>
        <div className="copy_right_section">
            <span> Meta © 2022 </span>
        </div>

    </div>

  )
}

export default AuthFooter