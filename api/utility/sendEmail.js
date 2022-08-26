
import nodemailer from 'nodemailer'

export const sendEmail = async ( to, subject, text ) => {


  try {

    let transport = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      auth: {
        user: "developerhumayun9408@gmail.com",
        pass: "tefuudrywukiemdk"
      }
    });

    await transport.sendMail({
      from : 'developerhumayun9408@gmail.com',
      to : to,
      subject : subject,
      text : text 
    })
    
  } catch (error) {
    
  }

}