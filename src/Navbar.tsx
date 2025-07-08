import { useNavigate, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isMenuOpen]);

    return (
        // Remove overlay logic
        <div className='navbar w-full px-4 sm:px-6 md:px-8 lg:px-0'>
            <div className='nav-logo' onClick={() => navigate('/')}> 
                <div className='img'/>
                <span className='name'>Pranav</span>
            </div>
            {/* Mobile Menu Button */}
            <button 
                className="md:hidden p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
                style={{ border: 'none', outline: 'none', boxShadow: 'none', background: 'none' }}
            >
                <div className={`w-6 h-0.5 bg-primary mb-1.5 transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
                <div className={`w-6 h-0.5 bg-primary mb-1.5 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></div>
                <div className={`w-6 h-0.5 bg-primary transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
            </button>
            {/* Desktop/Menu */}
            <div
                className={
                    `pages navbar-menu sm:text-[16px] md:text-[20px] lg:text-[24px] flex-col md:flex-row absolute md:relative top-[60px] md:top-0 left-0 w-full md:w-auto bg-theme-bg md:bg-transparent p-4 md:p-0${isMenuOpen ? ' show' : ''}`
                }
                style={isMenuOpen ? {zIndex: 49} : {}}
            >
                <NavLink 
                    className={({isActive}) => isActive ? "page active" : "page"} 
                    to="/"
                    onClick={() => setIsMenuOpen(false)}
                >
                    <span className='hashtag'>#</span>home
                </NavLink>
                <NavLink 
                    className={({isActive}) => isActive ? "page active" : "page"} 
                    to="/projects"
                    onClick={() => setIsMenuOpen(false)}
                >
                    <span className='hashtag'>#</span>projects
                </NavLink>
                <NavLink 
                    className={({isActive}) => isActive ? "page active" : "page"} 
                    to="/about-me"
                    onClick={() => setIsMenuOpen(false)}
                >
                    <span className='hashtag'>#</span>about-me
                </NavLink>
                <NavLink 
                    className={({isActive}) => isActive ? "page active" : "page"} 
                    to="/contacts"
                    onClick={() => setIsMenuOpen(false)}
                >
                    <span className='hashtag'>#</span>contacts
                </NavLink>
            </div>
        </div>
    );
}

export default Navbar;