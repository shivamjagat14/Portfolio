import React from 'react'
import '../Navbar/Navbar.css';
import { Link } from 'react-scroll';
// images
import logo from '../../Assets/assets/logo.png';
import contactimg from '../../Assets/assets/contact.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBarsStaggered } from '@fortawesome/free-solid-svg-icons';

export const Navbar = () => {
  return (
    <nav id="navbar" className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container navbarcontainer bg-dark">
        <a className="navba r-brand" href="#"><img src={logo} alt="logo" className="logo" /></a>
        <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"> 
          <span className='bars'><FontAwesomeIcon icon={faBarsStaggered}/></span>
        </button>
          <div className="collapse navbar-collapse justify-content-around" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#"><Link className='menulistItems text-decoration-none text-white' activeClass='active' to='intro' spy={true} smooth={true} offset={-100}>Home</Link></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><Link className='menulistItems text-decoration-none text-white'  activeClass='active' to='about' spy={true} smooth={true} offset={-115}>About</Link></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><Link className='menulistItems text-decoration-none text-white' activeClass='active' to='skills' spy={true} smooth={true} offset={-115}>Skills</Link></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><Link className='menulistItems text-decoration-none text-white' activeClass='active' to='portfolio' spy={true} smooth={true} offset={-115}>Portfolio</Link></a>
              </li>
            </ul>
          <div className="contect d-flex justify-content-center rounded-pill fs-5 my-4 bg-white">
            <a className="nav-link text-decoration-none " href="#"><Link to='contact' className='text-decoration-none text-dark' spy={true} smooth={true} offset={-100} ><img src={contactimg} alt="contect-img" className="contect-img mx-1" />Contact me</Link></a>
          </div>
          </div>
      </div>
    </nav>
  )
}