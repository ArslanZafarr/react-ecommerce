
import React from 'react'
import { NavLink } from 'react-router-dom'
import { useCartContext } from '../context/cartContext'

const Header = () => {
    const { total_items } = useCartContext()
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
                    <li className='cart-nav-link'>
                        <NavLink to="/cart">
                            Cart
                            {
                                total_items > 0 ? <span className='cart-nav-link-number'>{total_items}</span> : null
                            }

                        </NavLink>
                    </li>
                </nav>
            </div>
        </div>
    )
}

export default Header