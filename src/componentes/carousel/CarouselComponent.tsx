import { Grid, Box, Typography } from '@material-ui/core';
import { LinkedIn } from '@material-ui/icons';
import react from 'react';
import Carousel from 'react-elastic-carousel';
import './CarouselComponent.css';

function CarouselComponent()
{
    var items =
    [
       { img: <Grid item xs={4} alignItems="center">
                        <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column" className="integrante">
                            <img src="https://avatars.githubusercontent.com/u/97414841?v=4" alt="Foto de perfil de Aurora Marques" className="icon" />
                            <Typography variant="h5" className="nomes">Aurora Marques</Typography>
                            <Box>
                                <a href="https://github.com/Aurhie" target="_blank">
                                    
                                </a>
                                <a href="https://www.linkedin.com/in/aurora-lúcia-marques-989aba226/" target="_blank">
                                    <LinkedIn className='redes' />
                                </a>
                            </Box>
                        </Box>
                    </Grid>},
        { img: <Grid item xs={4} alignItems="center">
        <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column" className="integrante">
            <img src="https://avatars.githubusercontent.com/u/86332474?v=4" alt="Foto de perfil de Luna Ribeiro" className="icon" />
            <Typography variant="h5" className="nomes">Luna Ribeiro</Typography>
            <Box>
                <a href="https://github.com/LunaRibeiro" target="_blank">
                
                </a>
                <a href="https://www.linkedin.com/in/luna-ribeiro-alves/" target="_blank">
                    <LinkedIn className='redes' />
                </a>
            </Box>
        </Box>
    </Grid> }
    ]
    
    return(
        <Carousel isRTL={false} enableAutoPlay autoPlaySpeed={5000} >
            {
                items.map(item =>(
                    <>
                    {item.img}
                    </>
                ))
            }
        </Carousel>
    )
}

export default CarouselComponent;