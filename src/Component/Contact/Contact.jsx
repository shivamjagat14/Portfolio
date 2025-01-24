import React, { useState } from 'react'
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Swal from 'sweetalert2'


export const Contact = () => {

// function

  // web3forms sent massage
  const onSubmit = async (e) => {
   
    e.preventDefault();
    const formData = new FormData(e.target);

    formData.append("access_key", process.env.REACT_APP_API_KEY);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Massage Sent Successfully !",
        icon: "success"
      });
    }
  };

  return (
    <div className='Contact' id='contact'>
      <div className="headcontaint text-white text-center">
        <div className="contactheader headinganimation d-flex flex-column align-items-center ">
          <h3 className='my-2'>Contact Me</h3>
          <div className="underline"></div>
          <p className='fs-2 mt-5'>Let's Start a Conversation!</p>
        </div>
      </div>
      <div className=" form-section  text-white d-flex justify-content-around">
        <div className="contain">
          <h4 className='fs-2 rightslide'>Contact me for collaboration</h4>
          <p className='py-4'>Reach out today to discuss your project needs sand start collaborating on something amazing!</p>
          <div className="sociale rightslide d-flex justify-content-center m-4">
            <a href={'https://github.com/shivamjagat14'} className=' github text-white '><FontAwesomeIcon icon={faGithub}/></a>
            <a href={'https://www.linkedin.com/in/shivamjagat1411/'} className=' linkedin text-white '><FontAwesomeIcon icon={faLinkedin}/></a>
            <a href={'https://www.instagram.com/shivam_art_14/'} className=' instagram text-white '><FontAwesomeIcon icon={faInstagram}/></a>
          </div>
        </div>
        <form onSubmit={(e)=>{onSubmit(e)}} className=' form '>
          <div className="inputs d-flex justify-content-end my-4">
            <input type="text"  className="inputName  rightslide" name='name' placeholder="Your name" />
            <input type="email"  className="inputEmail" name='email' placeholder="Your Email" />
          </div>
          <div className="textarea d-flex justify-content-end rightslide">
            <textarea placeholder='Your Message' name='message' className='my-3'></textarea>
          </div>
          <div className="d-flex justify-content-center my-3 ">
            <button type="submit" className=' submitbtn'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}
