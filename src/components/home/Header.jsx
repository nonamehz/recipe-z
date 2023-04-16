import { Link } from 'react-router-dom';

import Logo from '../../assets/logo-z-recipes.png';
import './styles/Header.css';
import { MenuIcon, XCircleIcon } from './Icons';
import { useState } from 'react';
import { NavLinks } from '../shared/NavLinks';


export const Header = () => {

    const [openMenu, setOpenMenu] = useState(false);

    return (
        <header className="header-wrapper container">
            <Link to="/" className="nav-brand button-icon">
                <img src={Logo} alt="Logo Recipe Z" />
            </Link>
            <div className="nav-wrapper">
                <Link to="/"><span>Recipe-Z</span></Link>
                <nav className="nav">
                    <NavLinks onClick={() => setOpenMenu(false)} />
                </nav>
                <button onClick={() => setOpenMenu(prev => !prev)} className="button-icon menu-button">
                    <MenuIcon />
                </button>
                {
                    openMenu &&
                    <nav className={`nav-mobile ${openMenu ? 'isOpen' : ''}`}>
                        <button onClick={() => setOpenMenu(prev => !prev)} className="nav-mobile-icon">
                            <XCircleIcon />
                        </button>
                        <NavLinks onClick={() => setOpenMenu(false)} />
                    </nav>
                }
            </div>
        </header>
    )
}