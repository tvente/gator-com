import React from 'react';
import {AppBar, Toolbar, Typography} from "@material-ui/core";
import '../App.css';

function Header() {
    return (
        <AppBar className='appbar' position='static'>
            <Toolbar className='toolbar'>
                <Typography className='title' variant='h6'>
                    GatorCom
                </Typography>
                
                <a 
                    className="survey"
                    href='https://ufl.qualtrics.com/jfe/form/SV_3Q7mFflYolQm58i'
                    >
                    Survey
                </a>
            </Toolbar>
        </AppBar>
    );
};
export default Header;