import React from 'react'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { createToast } from '../utility/Toast'

const AccountVerify = () => {

  const params = useParams()
  const navigate = useNavigate()

  console.log(params);

  useEffect(() => {

    try {

      axios.post('http://localhost:5000/api/user/verify', params)
      .then( res =>  {
        createToast('Account verifaction successfull')
        navigate('/login')
      })
      .catch(error => {
        createToast('Account verifaction Faield')
      });
        
    } catch (error) {
      console.log(error);
    }

  })

  return (
    <div>Verify Your account</div>
  )
}

export default AccountVerify