import React, { useState, useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link, animateScroll as scroll } from 'react-scroll';
import "./Navbar.css";

const Navbar = () => {
    const screenSize = useMediaQuery('(max-width:960px)');
    let [click, setClick] = useState(false)

    const toggleIcon = () => {
        setClick((prevState) => !prevState);
    }

    useEffect(() => {
        const handleScrollLock = () => {
            if (screenSize && click) {
                // Lock scroll when the mobile menu is open
                document.body.style.overflow = 'hidden';
            } else {
                // Restore scroll when the mobile menu is closed
                document.body.style.overflow = 'unset';
            }
        };

        // Add event listener for scroll lock when the click state changes
        handleScrollLock();

        // Clean up the event listener on component unmount
        return () => {
            document.body.style.overflow = 'unset'; // Always restore scroll on unmount
        };
    }, [screenSize, click]);

    const clickedStyles = {
        top: 70,
        transition: 'all 0.5s ease',
    };

    const notClickedStyled = {
        top: -450,
        transition: 'all 0.5s ease'
    };

    const laptopView = {
        display: 'flex'
    };

    const menu = screenSize ? click ? clickedStyles : notClickedStyled : laptopView;

    return (
        <div className='container'>
            <div className='logo'>
                <a href='mailto:mannurkarswapnil@gmail.com' target='_blank' style={{ textDecoration: "none" }}>😎 <span className='name'>mannurkarswapnil@gmail.com</span></a>
                <div onClick={toggleIcon}>
                    {screenSize && (!click ? <MenuIcon sx={{ fontSize: 30 }} /> : <CloseIcon sx={{ fontSize: 30 }} />)}
                </div >
            </div>

            <div className='navItems' style={menu}>
                <ul>
                    <Link activeClass="active" to="about-me-section" smooth={true} className='link' onClick={toggleIcon}>About Me</Link>
                    <Link activeClass="active" to="experience-section" smooth={true} className='link' onClick={toggleIcon}>Experience</Link>
                    <Link activeClass="active" to="project-section" smooth={true} className='link' onClick={toggleIcon}>Projects</Link>
                </ul>
                <button><a>Contact me</a></button>
            </div>
        </div>
    );
};

export default Navbar;
