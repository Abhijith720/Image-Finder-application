import React from 'react'
import AppBar from 'material-ui/AppBar';
import  MuiThemeProvider  from 'material-ui/styles/MuiThemeProvider';

const Navbar = () => {
    return (
        <MuiThemeProvider>
        <div>
            
            <AppBar title="Image-Finder"/>
            
        </div>
        </MuiThemeProvider>
    )
}
export default Navbar;