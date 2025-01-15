import React from 'react'
// img
import './Skills.css'
import { ToolsData } from '../Data/Toolsdata'


export const Skills = () => {
  return (
      <div className='Skills' id='skills'>
          <div>
              <div className="abouttext text-center">
                  <div className="skillheader headinganimation">
                      <h2 className='text-white '>What I do</h2>
                      <div className="underline"></div>
                  </div>  
                  <p className='text-white headinganimation'>Discover the powerful tools and technologies I use to create execeptional, high-performing website & Application.</p>
              </div>
              <div className="skills ">
                  <div className='row'>
                      <div className="d-flex justify-content-center flex-wrap container">
                          {
                              ToolsData.map((value, index) => {
                                  return (
                                      <div id='Cardskill' className='Cardskill rightslide' key={index}>
                                          <div className="skillimg d-inline">
                                              <img src={value.img} alt="reactimg" className="imgs p-2 " />
                                          </div>
                                          <div className="skillname text-white">
                                              <h2>{value.toolname}</h2>
                                              <h1>{value.whatis}</h1>
                                          </div>
                                      </div>
                                  )
                              })
                          }
                      </div>
                      <div className="row2 d-flex justify-content-center rightslide">
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}
