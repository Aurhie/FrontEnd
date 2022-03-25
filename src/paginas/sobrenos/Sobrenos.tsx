import React from 'react';
import { Box, Button, Grid, TextField, Typography } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedIn from '@material-ui/icons/LinkedIn';
import { Link } from 'react-router-dom';
import './Sobrenos.css';

function Sobrenos() {
    return (
        <Grid container>
            <Grid item container direction='row' justifyContent='center' alignItems="center">
                <Grid item xs={3} alignItems="center">
                    <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column" className="integrante">
                        <AccountCircle className="icon" />
                        <Typography variant="h5" className="nomes">Aurora Marques</Typography>
                        <Box>
                            <a href="https://github.com/Aurhie" target="_blank">
                                <GitHubIcon className='redes' />
                            </a>
                            <a href="https://www.linkedin.com/in/aurora-lúcia-marques-989aba226/" target="_blank">
                                <LinkedIn className='redes' />
                            </a>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={3} alignItems="center">
                    <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column" className="integrante">
                        <AccountCircle className="icon" />
                        <Typography variant="h5" className="nomes">Luna Ribeiro</Typography>
                        <Box>
                            <a href="https://github.com/LunaRibeiro" target="_blank">
                                <GitHubIcon className='redes' />
                            </a>
                            <a href="https://www.linkedin.com/in/luna-ribeiro-alves/" target="_blank">
                                <LinkedIn className='redes' />
                            </a>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={3} alignItems="center">
                    <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column" className="integrante">
                        <AccountCircle className="icon" />
                        <Typography variant="h5" className="nomes">Mariana Neves</Typography>
                        <Box>
                            <a href="https://github.com/mariisneves/" target="_blank">
                                <GitHubIcon className='redes' />
                            </a>
                            <a href="https://www.linkedin.com/in/mariisneves/" target="_blank">
                                <LinkedIn className='redes' />
                            </a>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={3} alignItems="center">
                    <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column" className="integrante">
                        <AccountCircle className="icon" />
                        <Typography variant="h5" className="nomes">Matheus Oliveira</Typography>
                        <Box>
                            <a href="https://github.com/MatheusOliveira-1" target="_blank">
                                <GitHubIcon className='redes' />
                            </a>
                            <a href="https://www.linkedin.com/in/mo-dev/" target="_blank">
                                <LinkedIn className='redes' />
                            </a>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={6} className="imagem">
                </Grid>
            </Grid>
            <Grid item container direction='row' justifyContent='center' alignItems="center">
                <Grid item xs={3} alignItems="center">
                    <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column" className="integrante">
                        <AccountCircle className="icon" />
                        <Typography variant="h5" className="nomes">Pedro Rodrigues</Typography>
                        <Box>
                            <a href="https://github.com/pedrocadeoz" target="_blank">
                                <GitHubIcon className='redes' />
                            </a>
                            <a href="https://www.linkedin.com/in/pedro-rodriguesss/" target="_blank">
                                <LinkedIn className='redes' />
                            </a>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={3} alignItems="center">
                    <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column" className="integrante">
                        <AccountCircle className="icon" />
                        <Typography variant="h5" className="nomes">Sarah Ramos</Typography>
                        <Box>
                            <a href="https://github.com/sarahprog" target="_blank">
                                <GitHubIcon className='redes' />
                            </a>
                            <a href="https://www.linkedin.com/in/sarah-ramos-09617b1ba/" target="_blank">
                                <LinkedIn className='redes' />
                            </a>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={3} alignItems="center">
                    <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column" className="integrante">
                        <AccountCircle className="icon" />
                        <Typography variant="h5" className="nomes">William Oliveira</Typography>
                        <Box>
                            <a href="https://github.com/wowilliam" target="_blank">
                                <GitHubIcon className='redes' />
                            </a>
                            <a href="https://www.linkedin.com/in/wowilliam/" target="_blank">
                                <LinkedIn className='redes' />
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Sobrenos;