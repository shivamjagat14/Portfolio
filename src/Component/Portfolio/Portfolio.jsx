import React from 'react'
import './Portfolio.css'
import { Projectdata } from '../Data/Projectdata'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons'


export const Portfolio = () => {
  return (
    <div id='portfolio'>
      <div className="portfolioheader headinganimation d-flex flex-column align-items-center">
        <h3 className='text-white text-center'>My portfolio</h3>
        <div className="underline"></div>
      </div>
      <p className='text-white text-center headinganimation'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse ex minima recusandae nesciunt temporibus! Illo sunt cupiditate, voluptas sit illum dicta odit magni, laboriosam vero at ducimus autem perferendis nihil.</p>
      <div className="gallary d-flex justify-content-center flex-wrap ">
        {
          Projectdata.map((value, index) => {
            return (
              <div key={index} className=" rightslide project">
                <div className="projectlogo">
                  <img src={value.img} alt="" className="projectimg" />
                </div>
                <div className="d-flex flex-colum justify-content-center">
                  <div className="project-containt text-white">
                    <h4 className='py-2 '>{value.projectname}</h4>
                    <p>{value.describtion}</p>
                  </div>
                  <div className="visitbtn d-flex justify-content-center align-items-center">
                    <a href={value.url} className='text-dark'><FontAwesomeIcon icon={faSquareArrowUpRight} /></a>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
