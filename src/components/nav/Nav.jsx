import React, {useState} from 'react'
import './nav.css'
import {AiFillHome, AiOutlineUser} from 'react-icons/ai'
import {BsFillBriefcaseFill} from 'react-icons/bs'
import {MdCleaningServices} from 'react-icons/md'
import {IoMdContact} from 'react-icons/io'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav("#")} className={activeNav === '#' ? 'active' : ''}><AiFillHome /></a>
      <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#experience" onClick={() => setActiveNav("#experience")} className={activeNav === '#experience' ? 'active' : ''}><BsFillBriefcaseFill /></a>
      <a href="#services" onClick={() => setActiveNav("#services")} className={activeNav === '#services' ? 'active' : ''}><MdCleaningServices /></a>
      <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === '#contact' ? 'active' : ''}><IoMdContact /></a>
    </nav>
  )
}

// stopped at 1:21:36

export default Nav