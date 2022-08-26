
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import CloseButton from 'react-bootstrap/CloseButton';
import axios from 'axios'
import Modal from 'react-bootstrap/Modal';
import { createToast } from '../../utility/Toast';
import swal from 'sweetalert';
// import Register from '../../pages/Register/Register';


function RegistrationModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

 //  state for register field
 const [input, setInput] = useState({
    fname : '',
    lname : '',
    email : '',
    password : '',
 })


//  Handle Register field
const handleRegisterFields = (e) => {
    setInput( (prev) =>  ({ ...prev, [e.target.name] : e.target.value }))
}


// Handle Register Form
const handleRegisterForm = async (e) => {

    e.preventDefault()

    try {
        
        await axios.post('http://localhost:5000/api/user/register', input)
        .then( res => {
           
            setInput({
                fname : '',
                lname : '',
                email : '',
                password : '',
            })

            swal({
                title: "Success",
                text: "Registration has been successfull",
                icon: "success",
              })
        })
        .catch( error => {
            // createToast.error(error)
        });

    } catch (err) {
        // console.log(err);
    }

}


  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Create New Account
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Body>
        
            <div className="register_section"> 
                <div className="register_body">
                    <div className="header_content d-flex justify-content-between align-item-center">

                    <div className="detail">
                        <h4> Sign Up </h4>
                        <span> It's quick and easy </span>
                        </div>
                        <span onClick={handleClose}> <CloseButton /> </span>
                      
                    </div>
                    <div className="form_area">
                        <form onSubmit={ handleRegisterForm }>

                            <div className="name_field">
                                <input name='fname' value={input.fname} onChange={ handleRegisterFields } type="text" className='first_name' placeholder='First name' />
                                <input name='lname' value={input.lname} onChange={ handleRegisterFields } type="text" className='username' placeholder='Surename' />
                            </div>

                            <input name='email' value={input.email} onChange={ handleRegisterFields } type="text" className='email_feild' placeholder='Mobile number and email address' />
                            <input name='password' value={input.password} onChange={ handleRegisterFields } type="text" className='new_password' placeholder='New password' />
                            <label htmlFor="date_boxs"> Date of birth </label>
                            <div className="date_box" id='date_boxs'>
                                <div className="date">
                                    <select name="" id="">
                                        <option value="1">  1 </option>
                                        <option value="2">  2 </option>
                                        <option value="3">  3 </option>
                                        <option value="4">  4 </option>
                                        <option value="5">  5 </option>
                                        <option value="6">  6 </option>
                                        <option value="7">  7 </option>
                                        <option value="8">  8 </option>
                                        <option value="9">  9 </option>
                                        <option value="10">  10 </option>
                                        <option value="11">  11 </option>
                                        <option value="12">  12 </option>
                                        <option value="13">  13 </option>
                                        <option value="14">  14 </option>
                                        <option value="15">  15 </option>
                                        <option value="16">  16 </option>
                                        <option value="17">  17 </option>
                                        <option value="18">  18 </option>
                                        <option value="19">  19 </option>
                                        <option value="20">  20 </option>
                                        <option value="21">  21 </option>
                                        <option value="22">  22 </option>
                                        <option value="23">  23 </option>
                                        <option value="24">  24 </option>
                                        <option value="25">  25 </option>
                                        <option value="26">  26 </option>
                                        <option value="27">  27 </option>
                                        <option value="28">  28 </option>
                                        <option value="29">  29 </option>
                                        <option value="30">  30 </option>
                                        <option value="31">  31 </option>                                    
                                    </select>
                                </div>
                                <div className="month">
                                    <select name="" id="">
                                        <option value="jan">Jan</option>
                                        <option value="feb">Feb</option>
                                        <option value="mar">Mar</option>
                                        <option value="apr">Apr</option>
                                        <option value="may">May</option>
                                        <option value="jun">Jun</option>
                                        <option value="jul">Jul</option>
                                        <option value="aug">Aug</option>
                                        <option value="sep">Sep</option>
                                        <option value="oct">Oct</option>
                                        <option value="nov">Nov</option>
                                        <option value="dec">Dec</option>
                                    </select>
                                </div>
                                <div className="year">
                                    <select name="" id="">
                                        <option value="2022"> 2022 </option>
                                        <option value="2021"> 2021 </option>
                                        <option value="2020"> 2020 </option>
                                        <option value="2019"> 2019 </option>
                                        <option value="2018"> 2018 </option>
                                        <option value="2017"> 2017 </option>
                                        <option value="2016"> 2016 </option>
                                        <option value="2015"> 2015 </option>
                                    </select>
                                </div>
                            </div>
                            
                            <label htmlFor="date_boxs"> Gender </label>
                            <div className="gender_box">
                            <div className="femal">
                                <label htmlFor=""> Femal </label>
                                <input type="radio" name='gender' value='femal' onChange={ handleRegisterFields } />
                            </div>
                            <div className="male">
                                <label htmlFor=""> Male </label>
                                <input type="radio" name='gender' value='male' onChange={ handleRegisterFields } />
                            </div>
                            <div className="custom">
                                <label htmlFor=""> Custom </label>
                                <input type="radio" name='gender' value='custom' onChange={ handleRegisterFields } />
                            </div>
                            {/* <div className="custom_option">
                                <select name="" id="">
                                    <option value=""> Select your pronoun </option>
                                    <option value="she"> She : "Wish her a happy birthday" </option>
                                    <option value="he"> He : "Wish him a happy birthday" </option>
                                    <option value="they"> They : "Wish them a happy birthday" </option>
                                </select>
                                <label htmlFor=""> Your pronoun is visible to everyone. </label>
                                <input type="text" placeholder='Gender (optional)' />
                            </div> */}
                            </div>
                            <div className="content">
                                <p> People who use our service may have uploaded your contact information to Facebook. <a href="#"> Learn more </a>. </p>
                                <p> By clicking Sign Up, you agree to our <a href="#"> Terms </a>, <a href="#"> Privacy Policy </a> and <a href="#"> Cookies Policy </a>. You may receive SMS notifications from us and can opt out at any time. </p>
                            </div>

                            <button type='submit' className='submit_button'> Sign Up </button>

                        </form>
                    </div>
                </div> 
            </div>         

        </Modal.Body>
      </Modal>
    </>
  );
}

export default RegistrationModal