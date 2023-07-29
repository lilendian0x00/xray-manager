import React from 'react'
import Home from './Home/Home';
import Users from './Users/Users';
import Config from './Config/Config';
import About from './About/About';
import { FaHome, FaUsers, } from 'react-icons/fa';
import { AiFillSetting, AiFillPhone } from 'react-icons/ai';


export const routesMap = [
    { "name": "Home", "location": "/home", "icon": FaHome, "component": <Home /> },
    { "name": "Inbound", "location": "/inbound", "icon": FaUsers, "component": <Users /> },
    { "name": "Config", "location": "/config", "icon": AiFillSetting, "component": <Config /> },
    { "name": "About", "location": "/about", "icon": AiFillPhone, "component": <About /> },
]

