import React, {useState, useRef, useEffect} from 'react'
import {Link} from 'react-scroll';
import './Navbar.css'
import {HiMenu} from 'react-icons/hi'
import {GiSplitCross} from 'react-icons/gi'

const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    const [isOpen, setIsOpen] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () =>  window.onscroll = null;
    }

    const handleClick = () => {
        setIsOpen((prevValue)=>{
            return !prevValue;
        })
    }

    function useOutsideAlerter(ref){
        useEffect(()=>{
            function handleOutsideClickEvent(event){
                if(ref.current && !ref.current.contains(event.target) && event.target.id !== 'menu-btn'){
                    setIsOpen(false);
                }
            }
            document.addEventListener("click", handleOutsideClickEvent);
            return ()=> document.removeEventListener("click", handleOutsideClickEvent);
        }, [ref]);
    }

    const menuRef = useRef(null);
    useOutsideAlerter(menuRef);
  return (
    <div className='navbar flex padding-horizontal' style = {{margin : isScrolled ? "0" : "10px", borderRadius : isScrolled ? "0" : "5px"}}>
        <div className="logo">
            AshAbhi
        </div>
        <div className={isOpen ? "menu" : "menu open"} ref = {menuRef}>
            <ul className='flex'>
                <li><Link  className='item' to="home" activeClass='active' smooth = {true} spy = {true} offset={-200}>Home</Link></li>
                <li><Link  className='item' to="about" activeClass='active' smooth = {true} spy = {true} offset={-70}>About</Link></li>
                <li><Link  className='item' to="skills" activeClass='active' smooth = {true} spy = {true} offset={-70}>Skills</Link></li>
                <li><Link  className='item' to="projects" activeClass='active' smooth = {true} spy = {true} offset={-70}>Projects</Link></li>
                <li><Link  className='item' to="contact" activeClass='active' smooth = {true} spy = {true} offset={-70}>Contact</Link></li>
                <li className='btn-outer'><Link to="contact" className='btn' smooth={true} spy = {true} offset={-70}>Hire Me</Link></li>
            </ul>
        </div>
        <div className="menu-btn flex" onClick = {handleClick}>
            {
                isOpen ?  <GiSplitCross id = "menu-btn" className='icon'/> :  <HiMenu id = "menu-btn" className='icon'/>
            }
        </div>
    </div>
  )
}

export default Navbar