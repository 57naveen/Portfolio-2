import React, {  useState } from 'react'
import "./Header.css"

const Header = () => {

      window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) {
      header.classList.add("scroll-header");
    } else {
      header.classList.remove("scroll-header");
    }
  });


    const [Toggle, setToggle] = useState(false)
    const [activeNav, setActiveNav] = useState("#home");

  return (
   <header className= "header">
     <nav className="nav container">
         <a href= "" className="nav__logo">Naveen</a>


         <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
             <ul className="nav__list grid">
                 <li className="nav__item">
                     <a href="#home" onClick={()=> setActiveNav('#home')} className={activeNav === "#home" ?  "nav__link active-link" :  "nav__link"}>
                         <i className= "uil uil-estate nav__icon"></i>Home
                     </a>
                 </li> 

                 <li className="nav__item">
                      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === "#about" ?  "nav__link active-link" :  "nav__link"}>
                         <i className= "uil uil-user nav__icon"></i>About
                     </a>
                 </li> 

                 <li className="nav__item">
                      <a href="#skills" onClick={()=> setActiveNav('#skills')} className={activeNav === "#skills" ?  "nav__link active-link" :  "nav__link"}>
                         <i className= "uil uil-file-alt nav__icon"></i>Skills
                     </a>
                 </li> 

                 <li className="nav__item">
                       <a href="#services" onClick={()=> setActiveNav('#Services')} className={activeNav === "#Services" ?  "nav__link active-link" :  "nav__link"}>
                         <i className= "uil uil-briefcase-alt nav__icon"></i>Services
                     </a>
                 </li> 

                 {/* <li className="nav__item">
                    <a href="#Portfolio" onClick={()=> setActiveNav('#Portfolio')} className={activeNav === "#Portfolio" ?  "nav__link active-link" :  "nav__link"}>
                         <i className= "uil uil-scenery nav__icon"></i>Portfolio
                     </a>
                 </li>  */}

                 <li className="nav__item">
                      <a href="#contact" onClick={()=> setActiveNav('#Contact')} className={activeNav === "#Contact" ?  "nav__link active-link" :  "nav__link"}>
                         <i className= "uil uil-message nav__icon"></i>Contact
                     </a>
                 </li> 
             </ul>
             <i class="uil uil-times nav__close" onClick={()=>setToggle(!Toggle)} ></i>
         </div>
         <div className='nav__toggle' onClick={()=>setToggle(!Toggle)}>
            <i class="uil uil-apps"></i>
         </div>
     </nav>
    </header>
  )
}

export default Header