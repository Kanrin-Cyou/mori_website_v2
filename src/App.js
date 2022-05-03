import React, { Component }from 'react';
import {Box} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { teal } from '@mui/material/colors';
import AOS from 'aos';
import "aos/dist/aos.css";

import Home from './pages/Home';
import ResponsiveAppBar from './components/Appbar';
import Footer from './components/Footer';

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: teal[900],
    },
    secondary: {
      main: '#ff9900',
    },
    text:{
      secondary:'rgba(0,0,0,0.8)'
    },
  },
  typography:{
    fontFamily:'Noto Serif JP',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
  }
});

class App extends Component {

  componentDidMount(){
    AOS.init({
      duration: 1000
    });
  }

  render(){
    return (
      <div className="App">
        <ThemeProvider theme={theme}>
            <ResponsiveAppBar/>
            <Home/>
            <Footer/>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
