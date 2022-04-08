import { Box, Grid, Typography } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedIn from '@material-ui/icons/LinkedIn';
import { Link } from 'react-router-dom';
import './Sobrenos.css';



function Sobrenos() {
    return (
        <Grid container>
            <Grid item container xs={6} direction='column'>
                    <Typography variant="h1" className="tituloSobreNos">ColaboraTech</Typography>

                <Typography className="textoSobreNos">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum metus pharetra, mattis ipsum nec, accumsan erat. Ut eros arcu, porta sed tempus sagittis, pulvinar in nulla. Praesent tristique urna efficitur libero blandit, finibus tincidunt tellus ultrices. Donec efficitur mollis ante sollicitudin consectetur. Sed bibendum nibh lorem, ut sagittis magna posuere quis. Duis vulputate sodales pellentesque. Integer sagittis eros libero, sit amet pretium erat sollicitudin quis. Phasellus sit amet molestie sem, nec volutpat eros. Praesent lorem tellus, tincidunt a dapibus eu, consectetur vitae erat. Sed vel pharetra nunc. Maecenas id ligula a ligula facilisis interdum nec eget neque. Nullam ultricies tristique elit, id laoreet velit. Curabitur imperdiet velit nisl, a ornare nisi aliquet et. Aenean eu tellus vitae nibh scelerisque hendrerit pretium quis sem. Fusce ac diam et risus maximus rhoncus in at risus. Nullam eget nisl eu tellus ornare tempus.
                    Pellentesque lobortis libero sem, eu sagittis ipsum euismod sed. Vestibulum sollicitudin ac nunc eu commodo. Nulla ultricies feugiat luctus. Proin vel ex nisl. Fusce nec risus eget ex placerat tempus nec sed dui. Etiam ac justo eu nisi blandit luctus. Duis ultrices nunc sed leo semper porttitor. Morbi quis metus non urna laoreet viverra.
                    Sed malesuada, enim et pellentesque vestibulum, ipsum lectus imperdiet sapien, vel imperdiet nisl augue id metus. Ut eget massa eget nulla posuere pulvinar non dignissim lacus. Fusce mi ligula, vulputate ut accumsan sit amet, sagittis vitae mi. Phasellus non euismod magna. Vestibulum in massa et turpis semper pretium ut sed neque. Maecenas mattis efficitur nulla, a egestas sem feugiat nec. Vestibulum in bibendum urna. Nunc sed dictum purus. Nam bibendum urna ut massa molestie pharetra. Aenean ligula mauris, faucibus pharetra ante eu, elementum laoreet lectus. Nulla et magna ipsum. Integer sed massa quam. Vivamus lacinia blandit pulvinar. Suspendisse non mi urna.
                    Donec scelerisque, ex vel lobortis suscipit, lectus lectus semper leo, vitae condimentum nibh nunc id mauris. Donec sed ultrices erat. Aenean vitae tellus turpis. Sed et hendrerit tortor. Proin a posuere sapien. Phasellus lobortis nisl vitae dolor mattis, cursus feugiat tortor blandit. Donec et nulla laoreet, condimentum arcu ut, consectetur tellus. Maecenas posuere at mi sit amet dictum.
                    Suspendisse scelerisque luctus enim, sed vehicula magna tristique sed. Pellentesque suscipit pretium ante sit amet pretium. Phasellus interdum justo in faucibus varius. Nunc nec odio tellus. Etiam vitae vestibulum ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc mauris ex, vehicula non orci sit amet, tempor congue turpis. Curabitur dictum quis libero eu facilisis. Sed quis ipsum ante. Aenean quis diam ut sem ultricies dictum. Aliquam vitae sem ut velit pulvinar vehicula.
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