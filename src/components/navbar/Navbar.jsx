import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles.css';
import './navbar.css';

const Navbar = () => {
    return (
        <header className="header">
            <div className="lay">
                <div className="nav">
                    <div className="col-4 header__left">
                        <div className='d-flex'>
                            <div className='menu-box'>
                                <i className="fa-solid fa-bars"></i>
                                <p>MENÚ</p>
                            </div>
                            <div className='search-box'>
                                <form name="com-search">
                                    <div className='search-input'>
                                        <input type="text" placeholder="Buscar" />
                                    </div>
                                    <div className='search-ico'>
                                        <i className="fa-solid fa-magnifying-glass"></i>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 header__middle">
                        <Link to="/">
                            <div className="header-middle-logo">
                                <img 
                                    className="img-logo" 
                                    src="https://upload.wikimedia.org/wikipedia/commons/2/28/Logo_La_Naci%C3%B3n.svg" 
                                    alt="" 
                                />
                            </div>
                        </Link>
                    </div>
                    <div className="col-4 header__right">
                        <div className="com-usuario">
                            <Link to="/subscribe">
                                <button className="--btn --highlight btn-subscribe">Suscribite</button>
                            </Link>
                            <Link to="/login">
                                <button className="--btn --secondary btn-ingresar">Ingresar</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar