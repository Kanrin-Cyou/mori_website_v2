import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import {AppBar,Toolbar,Slide} from '@mui/material';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import PropTypes from 'prop-types';
import { Link} from 'react-scroll'

var Scroll = require('react-scroll');

function HideOnScroll(props) {
const { children, window } = props;
// Note that you normally won't need to set the window ref as useScrollTrigger
// will default to window.
// This is only being set here because the demo is in an iframe.
const trigger = useScrollTrigger({
    target: window ? window() : undefined,
});

return (
    <Slide appear={false} direction="down" in={!trigger}>
    {children}
    </Slide>
);
}

export default function ResponsiveAppBar(){
    
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
    };


    return ( 
    
    <HideOnScroll>
        <AppBar elevation={0} sx={{maxWidth:"100%"}}>
            <Container p={5}>
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        行政書士M&K総合事務所
                    </Typography>

                    <Box sx={{flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>

                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            <MenuItem key={'トップ'}>
                                <Link duration={1000} smooth={true} to='top' onClick={()=>handleCloseNavMenu()}>トップ</Link>
                            </MenuItem>
                            <MenuItem key={'ご挨拶'}>
                                <Link duration={1000} smooth={true} to='welcome'onClick={()=>handleCloseNavMenu()}>ご挨拶</Link>
                            </MenuItem>
                            <MenuItem key={'業務内容'}>
                                <Link duration={1000} smooth={true} to='business' onClick={()=>handleCloseNavMenu()}>業務内容</Link>
                            </MenuItem>
                            <MenuItem key={'行政書士紹介'}>
                                <Link duration={1000} smooth={true} to='introduction'onClick={()=>handleCloseNavMenu()}>行政書士紹介</Link>
                            </MenuItem>
                            <MenuItem key={'アクセス'} >
                                <Link duration={1000} smooth={true} to='access' onClick={()=>handleCloseNavMenu()}>アクセス</Link>
                            </MenuItem>
                            <MenuItem key={'お問い合わせ'}>
                                <Link duration={1000} smooth={true} to='questionary'onClick={()=>handleCloseNavMenu()}>お問い合わせ</Link>
                            </MenuItem>
                        </Menu>
                    </Box>    
                    

                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        行政書士 M&K総合事務所
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Button
                            key={'トップ'}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            <Link duration={1000} smooth={true} to='top'>トップ</Link>
                        </Button>

                        <Button
                            key={'ご挨拶'}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            <Link duration={1000} smooth={true} to='welcome'>ご挨拶</Link>
                        </Button>
                        <Button
                            key={'業務内容'}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            <Link duration={1000} smooth={true} to='business'>業務内容</Link>
                        </Button>
                        <Button
                            key={'行政書士紹介'}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            <Link duration={1000} smooth={true} to='introduction' >行政書士紹介</Link>
                        </Button>
                        <Button
                            key={'アクセス'}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            <Link duration={1000} smooth={true} to='access' >アクセス</Link>
                        </Button>
                    </Box>
                    
                    <Button 
                        color="secondary" 
                        variant="contained"
                        sx = {{color: 'black', display: {xs: 'none', md: 'block',borderRadius:50 }}}
                        pr={10}
                    >
                        <Link duration={1000} smooth={true} to='questionary' >お問い合わせ</Link>
                    </Button>

                </Toolbar>
            </Container>

        </AppBar>
    </HideOnScroll>
    )}