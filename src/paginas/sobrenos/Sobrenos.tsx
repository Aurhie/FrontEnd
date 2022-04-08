import { Box, Grid, Typography } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedIn from '@material-ui/icons/LinkedIn';
import { Link } from 'react-router-dom';
import './Sobrenos.css';



function Sobrenos() {
    return (
        <Grid container>
            <Grid item container xs={6} direction='column'>
                <Typography variant="h1" className="tituloSobreNos"></Typography>

                <Typography className="textoSobreNos">
                    O Naruto pode ser um pouco duro as vezes, talvez você não saiba disso, mas o Naruto também cresceu sem pai.
                     Na verdade ele nunca conheceu nenhum de seus pais, e nunca teve nenhum amigo em nossa aldeia.
                      Mesmo assim eu nunca vi ele chorar, ficar zangado ou se dar por vencido, ele está sempre disposto a melhorar, ele quer ser respeitado, é o sonho dele e o Naruto daria a vida por isso sem hesitar.
                       Meu palpite é que ele se cansou de chorar e decidiu fazer alguma coisa a respeito!
                </Typography>
            </Grid>
            <Grid item container xs={6}>
                <Grid item container direction='row' justifyContent='center' alignItems="center">
                    <Grid item xs={4} alignItems="center">
                        <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column" className="integrante">
                            <img src="https://avatars.githubusercontent.com/u/97414841?v=4" alt="Foto de perfil de Aurora Marques" className="icon" />
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
                    <Grid item xs={4} alignItems="center">
                        <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column" className="integrante">
                            <img src="https://avatars.githubusercontent.com/u/86332474?v=4" alt="Foto de perfil de Luna Ribeiro" className="icon" />
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
                    <Grid item xs={4} alignItems="center">
                        <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column" className="integrante">
                            <img src="https://avatars.githubusercontent.com/u/65250872?v=4" alt="Foto de perfil de Mariana Neves" className="icon" />
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
                </Grid>
                <Grid item container direction='row' justifyContent='center' alignItems="center">
                    <Grid item xs={4} alignItems="center">
                        <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column" className="integrante">
                            <img src="https://avatars.githubusercontent.com/u/97600307?v=4" alt="Foto de perfil de Matheus Oliveira" className="icon" />
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
                    <Grid item xs={4} alignItems="center">
                        <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column" className="integrante">
                            <img src="https://avatars.githubusercontent.com/u/95011770?v=4" alt="Foto de perfil de Pedro Rodrigues" className="icon" />
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
                    <Grid item xs={4} alignItems="center">
                        <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column" className="integrante">
                            <img src="https://avatars.githubusercontent.com/u/98063540?v=4" alt="Foto de perfil de Sarah Ramos" className="icon" />
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
                </Grid>
                <Grid item container direction='row' justifyContent='center' alignItems="center">
                    <Grid item xs={4} alignItems="center">
                        <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column" className="integrante">
                            <img src="https://avatars.githubusercontent.com/u/97924205?v=4" alt="" className="icon" />
                            <Typography variant="h5" className="nomes">William Oliveira</Typography>
                            <Box className='redesbox'>
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
        </Grid>
    );
}

export default Sobrenos;