import react from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Box mx={1} className='cursor logo'>
                        
                        {/* <Typography variant="h5" color="inherit">
                            Colaboratech
                        </Typography> */}
                    </Box>
                    <Box display='flex' justifyContent='start'>
                        <Link to='/home' className='text-decorator-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h5" color="inherit">
                                    Home
                                </Typography>
                            </Box>
                        </Link>

                        <Link to='/postagens' className='text-decorator-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h5" color="inherit">
                                    Postagens
                                </Typography>
                            </Box>
                        </Link>

                        <Link to='/temas' className='text-decorator-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h5" color="inherit">
                                    Temas
                                </Typography>

                            </Box>
                        </Link>

                        <Link to='/formularioTema' className='text-decorator-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h5" color="inherit">
                                    Cadastrar tema
                                </Typography>
                            </Box>
                        </Link>

                        <Link to='/sobre-nos' className='text-decorator-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h5" color="inherit">
                                    Sobre nós
                                </Typography>
                            </Box>
                        </Link>

                        <Link to='/login' className='text-decorator-none'>
                            <Box mx={1} style={{ cursor: "pointer", color: 'white' }} >
                                <Typography variant="h5" color="inherit">
                                    Logout
                                </Typography>
                            </Box>

                        </Link>
                    </Box>
                </Toolbar>
            </AppBar >
        </>
    )
}

export default Navbar;