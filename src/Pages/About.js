import React from 'react'
import CustomizedMenus from './DropDown'
import {Link} from 'react-router-dom'
import { AppBar, Toolbar, Typography, Box } from '@mui/material'

export default function About() {
    document.title="About Us";
  return (
    <div className='about'>
    <AppBar color="transparent">
    <Toolbar>
    <Typography sx={{marginRight: 'auto', color: 'white'}}>
    <Link style={{ textDecoration: 'none', color: 'white'}} to="/Menu">FOOD MENU</Link>
    </Typography>
    <CustomizedMenus/>
    </Toolbar>
    </AppBar>
    <Box
      sx={{
        fontSize: '20px',
        paddingTop: '40px',
        overflow: 'hidden',
        width: 800,
        height: 400,
        backgroundColor: 'white',
        color: 'black'
      }}
    >
    <b> HEY.! IT'S ELITE</b><br></br><br></br>
    Cravings of a foodie can be unpredictable. They might long for pizza with sushi<br></br>
    at the same time following it up with a small pile of jalebis.You never know when<br></br>
    they might get a certain hankering for exotic cuisines or multiple cuisines at the<br></br>
    same time. and visit when you find yourself in one of  those binge moods  remains.<br></br>
    Let us take you to elite restaurant, a cozy little eatery known  as palate saver for <br></br>
    crazy foodies like you.The place opens just before noonand juicy chicken tenders,dipped <br></br>
    operational till midnight, in case you feel like a midnight binge. fried until crispy<br></br>
    they don’t serve alcohol,beat those summer heat waves with into a spicy seasoned battera<br></br>
    a long cooler or non-alcoholic margarita. Read the menu carefully before ordering, deep <br></br>
    cool, citrusy delight with a creamy texture, glazed in honey From unusual terms you<br></br>
    may encounter on a menu at that fancy gastropub down the block to adjectives that will<br></br>
    invoke just how happy those truffle fries really made you feel, we’ve got you covered.<br></br>
    there is just so much to explore.</Box>
     </div>
  )
}
