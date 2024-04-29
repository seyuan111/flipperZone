import { Menu, X, ShoppingCart } from 'lucide-react'
import React, { useState } from 'react'
import Flipper from '../assets/Flipper.png'
import { navItems } from '../constants/resources'
import { Link } from 'react-router-dom'


const NavBar = () => {
    const [current, setCurrent] = useState(false)

    const setNav = () => {
        setCurrent(!current)
    }

    return (
        <div className="sticky top-0 z-50 py-3 backdrop-blue-lg border-b border-neutral-700/80 bg-neutral-600/60">
            <div className="container px-4 mx-auto relative text-sm">
                <div className="flex justify-between items-center">
                    <div className="flex items-center flex-shrink-0">
                        <Link to="/" className="flex items-center justify-center">
                            <img className="w-10 h-10 mr-2" src={Flipper} alt="" />
                            <span className="text-xl tracking-wider">FlipperZone</span>
                        </Link>
                    </div>
                    <ul className="hidden md:flex ml-14 space-x-12">
                        {navItems.map((item, index) => (
                            <li key={index} className="hover:text-blue-400 duration-300">
                                <Link to={item.href}>{item.label}</Link>
                            </li>
                        ))}
                    </ul>
                    <div className="hidden md:flex justify-center space-x-6 items-center">
                        <Link to="/Login" className="bg-gradient-to-r from-blue-500 to-blue-700 py-2 px-3 rounded-md">Sign In</Link>
                        <ShoppingCart className="cursor-pointer hover:text-blue-400 duration-300"/>
                    </div>
                    <div className="md:hidden flex flex-col justify-end">
                        <button onClick={setNav}>
                            {current ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
                <div className={`fixed right-0 z-20 bg-slate-800 w-full p-12 flex flex-col justify-center items-center md:hidden transition-all duration-300 ${current ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}>
                    <ul>
                        {navItems.map((item, index) => (
                            <li key={index} className="py-4 text-xl">
                                <Link to={item.href}>{item.label}</Link>
                            </li>
                        ))}
                    </ul>
                    <div className="flex space-x-6">
                        <Link to="/Login" className="bg-gradient-to-r from-blue-500 to-blue-700 py-2 px-3 rounded-md">Sign In</Link>
                        <ShoppingCart className="cursor-pointer hover:text-blue-400 duration-300"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar