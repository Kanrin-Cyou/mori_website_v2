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
                            <Link duration={1000} smooth={true} to='top'>
                                <MenuItem key={'トップ'} onClick={()=>handleCloseNavMenu()}>
                                    トップ
                                </MenuItem>
                            </Link>
                            
                            <Link duration={1000} smooth={true} to='welcome'>
                                <MenuItem key={'ご挨拶'} onClick={()=>handleCloseNavMenu()}>
                                    ご挨拶
                                </MenuItem>
                            </Link>
                            
                            <Link duration={1000} smooth={true} to='business' >
                                <MenuItem key={'業務内容'} onClick={()=>handleCloseNavMenu()}>
                                    業務内容
                                </MenuItem>
                            </Link>

                            <Link duration={1000} smooth={true} to='introduction'>
                                <MenuItem key={'行政書士紹介'} onClick={()=>handleCloseNavMenu()}>
                                    行政書士紹介
                                </MenuItem>
                            </Link>

                            <Link duration={1000} smooth={true} to='access' >
                                <MenuItem key={'アクセス'} onClick={()=>handleCloseNavMenu()}>
                                    アクセス
                                </MenuItem>
                            </Link>

                            <Link duration={1000} smooth={true} to='questionary'>
                                <MenuItem key={'お問い合わせ'} onClick={()=>handleCloseNavMenu()}>
                                    お問い合わせ
                                </MenuItem>
                            </Link>

                        </Menu>
                    </Box>    
                    

                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        行政書士M&K総合事務所
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Link duration={1000} smooth={true} to='top' sx={{width:"100%",height:"100%"}}>
                            <Button
                                key={'トップ'}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                トップ
                            </Button>
                        </Link>
                        
                        <Link duration={1000} smooth={true} to='welcome'>
                            <Button
                                key={'ご挨拶'}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                ご挨拶
                            </Button>
                        </Link>

                        <Link duration={1000} smooth={true} to='business'>
                            <Button
                                key={'業務内容'}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                業務内容
                            </Button>
                        </Link>

                        <Link duration={1000} smooth={true} to='introduction' >
                            <Button
                                key={'行政書士紹介'}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                            行政書士紹介
                            </Button>
                        </Link>
                        <Link duration={1000} smooth={true} to='access' >
                            <Button
                                key={'アクセス'}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                アクセス
                            </Button>
                        </Link>
                    </Box>
                    <Link duration={1000} smooth={true} to='questionary' >
                        <Button 
                            color="secondary" 
                            variant="contained"
                            sx = {{color: 'black', display: {xs: 'none', md: 'block',borderRadius:50 }}}
                            pr={10}
                        >
                            お問い合わせ
                        </Button>
                    </Link>

                </Toolbar>
            </Container>

        </AppBar>
    </HideOnScroll>
    )}