import React, { Component } from 'react';
import './Pages.css';
import CustomizedMenus from './DropDown'
import {Link} from 'react-router-dom'
import { AppBar, Toolbar, Tabs, Tab, Typography } from '@mui/material'

function Facilities(){
    document.title="Facilities";
    return (
        <div>
        <AppBar color="transparent">
    <Toolbar>
    <Typography sx={{marginRight: 'auto', color: 'black'}}>
    <Link style={{ textDecoration: 'none', color: 'black'}} to="/Menu">FOOD MENU</Link>
    </Typography>
    <CustomizedMenus/>
    </Toolbar>
    </AppBar>
        <div className="facilities">
        <blockquote>
    <h1 >Facilities</h1>
    <h2 style={{color: 'darkcyan'}}>Services and Conveniences</h2>
    <ul style={{listStyle: 'none'}}>
    <li>Cash withdrawal</li>
    <li>Currency Exchange</li>
    <li>Meeting (Banquet Facilities)</li>
    <li>Family Room</li>
    <li>Party Hall</li>
    <li>Cashless Payment Service</li>
    <li>Air Conditioner</li>
    <li>Play area</li>
    </ul>
    <h2 style={{color: 'darkcyan'}}>Cleanliness and Safety</h2>
    <ul style={{listStyle: 'none'}}>
    <li>Food Delivery</li>
    <li>Hand Sanitizer</li>
    <li>Safe dining Setup</li>
    </ul></blockquote>
        </div>
        </div>
      );
  
}

export default Facilities;