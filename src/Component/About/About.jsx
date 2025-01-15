import React from 'react'
import myCV from '../../Assets/assets/myCV.pdf'
import myimg from '../../Assets/assets/img.png'
import hireme from '../../Assets/assets/hireme.png'
import '../../Component/About/About.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'


export const About = () => {
  return (
    <section className='About' id='about'>
      <div className="Aboutsection ">
        <div className=" header-section headinganimation text-white text-center">
          <h3>About</h3>
          <div className="underline"></div>
        </div>
        <div className="myself d-flex align-items-center">
          <div className="myimg m-5 rightslide">
            <img src={myimg} alt="img" className="img " />
          </div>
          <div className="contant text-white">
            <h5 className='rightslide'>Hii I am Shivam Jagat</h5>
            <h4 className='rightslide' >I am Software Developer</h4>
            <p className='text-start my-3 rightslide'>
              My aim is to become a Web Developer . I have good Knowledge of Web Development and I learn Something new everyday about Web Development
            </p>
            <hr />
            <div className="info my-5 d-flex flex-column justify-content-center">
              <div className="row1 rightslide d-flex justify-content-around my-4">
                <div className="name">
                  <span>Name : </span>
                  <span>Shivam Singh Jagat</span>
                </div>
                <div className="addrase">
                  <span>From : </span>
                  <span>Korba Chhattisgarh India</span>
                </div>
              </div>
              <div className="row2 d-flex rightslide justify-content-around ">
                <div className="email">
                  <span>Email : </span>
                  <span>shivamjagat6@gmail.com</span>
                </div>
                <div className="phone">
                  <span>Phone : </span>
                  <span>91+8889951278</span>
                </div>
              </div>
            </div>
            <div className="btn  d-flex justify-content-center ">
                  <a href={'https://www.linkedin.com/in/shivamjagat1411/'}><button type="button" className='hiremebtn p-2 rounded-pill text-center mx-4'><img src={hireme} className='hiremeimg me-2' />Hire me</button></a>
                  <a href={myCV}  className='text-decoration-none' download><button type="button" className='downloadbtn p-3 rounded-pill text-center d-flex justify-content-center align-items-center px-3'><FontAwesomeIcon icon={faDownload} className=' downloadicon fs-3 me-2'/>Dowload CV</button></a>
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}
