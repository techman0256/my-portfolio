import { useNavigate, NavLink } from 'react-router-dom';

import './Navbar.css'

function Navbar() {
    const navigate = useNavigate();
    return (
        <div className='navbar'>
            <div className='nav-logo' onClick={() => navigate('/')}>
                <div className='img'/>
                <span className='name'>Pranav</span>
            </div>

            <div className='pages sm:text-[16px] md:text-[20px] lg:text-[24px]'>
                <NavLink className={({isActive}) => isActive ? "page active" : "page"} to="/">
                    <span className='hashtag'>#</span>home
                </NavLink>
                <NavLink className={({isActive}) => isActive ? "page active" : "page"} to="/projects">
                    <span className='hashtag'>#</span>projects
                </NavLink>
                <NavLink className={({isActive}) => isActive ? "page active" : "page"} to="/about-me">
                    <span className='hashtag'>#</span>about-me
                </NavLink>
                <NavLink className={({isActive}) => isActive ? "page active" : "page"} to="/contacts">
                    <span className='hashtag'>#</span>contacts
                </NavLink> 
                {/* <span className='text-primary'>EN </span>                */}
            </div>
        </div>
    )
}

export default Navbar;