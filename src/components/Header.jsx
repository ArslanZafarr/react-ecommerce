
import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div className='header-wrapper'>
            <div className='container-fluid header-container'>
                <div className='header-brand'>
                    <NavLink to="/">
                        <h4>Bora Bora</h4>
                    </NavLink>

                </div>
                <nav className='header-nav'>
                    <li>
                        <NavLink to="/" >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/products">
                            Products
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">
                            Contact
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/cart">
                            Cart
                        </NavLink>
                    </li>
                </nav>
            </div>
        </div>
    )
}

export default Header