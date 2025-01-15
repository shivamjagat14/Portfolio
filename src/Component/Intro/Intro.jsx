import React from 'react'
// images
import myimg from '../../Assets/assets/img.png'
// css
import '../../Component/Intro/Intro.css'

export const Intro = () => {
    return (
        <section id="intro" className='intro d-flex align-items-center justify-content-around'>
            <div className="introcontant text-white">
                <span className='fs-2'>Hello,</span>
                <h2 className='fs-1'>I'm<span className='myname' data-text='Shivam'> Shivam</span></h2>
                <div className="work">
                    <div className="workrols">
                        <span className='rols'>Web Developer</span>
                        <span className='rols'>Web Desine</span>
                        <span className='rols'>App Developer</span>
                        <span className='rols'>frelancer</span>
                    </div>
                </div>
            </div>
            <div className="myimg">
                <div className="col-12 col-md-8 col-sm-12 col-lg-6">
                    <img src={myimg} alt="myimg" className='myimg ' />
                </div>
            </div>
        </section>
    )
}
