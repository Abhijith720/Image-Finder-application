import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navbar from './Components/navbar/Navbar';
import Search from './Components/Search/Search';


function App() {
  return (
    <MuiThemeProvider>
    <div className="main">
      
       <Navbar></Navbar>
       <Search></Search>
      
    </div>
    </MuiThemeProvider>
  );
}

export default App;
