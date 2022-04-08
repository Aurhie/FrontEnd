import react, { useEffect } from 'react';
import { Paper, Box, Button, Grid, Typography } from '@material-ui/core';
import ListaPostagem from '../../componentes/postagens/listaPostagem/ListaPostagem';
import ModalPostagem from '../../componentes/postagens/modalPostagem/ModalPostagem';
import './Home.css';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { UserState } from '../../store/tokens/UserReducer';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Profile from '../../componentes/estaticos/profile/Profile';


function Home() {

    let history = useHistory();
    const token = useSelector < UserState, UserState["tokens"]> (
        (state) => state.tokens
    );

    useEffect(() => {
        if (token === "") {
            toast.error('Você precisa estar logado', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "dark",
                progress: undefined,
            });
            history.push("/login")

        }
    }, [token])

    return (
        <>
            <Grid container direction="row" justifyContent="center">
                {/* <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "white", fontWeight: "bold" }}>Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "white", fontWeight: "bold" }}>expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>


                    <Box display="flex" justifyContent="center">

                        <Box marginRight={1}>
                            <ModalPostagem />
                        </Box>
                        <Link to='/postagens' className='text-decorator-none'>
                            <Button variant="outlined" style={{ borderColor: "white", backgroundColor: "#3f51b5", color: "white" }}>
                                Ver Postagens
                            </Button>
                        </Link>
                    </Box>

                </Grid> */}
                {/* <Grid item xs={6}>
                    <img src="https://i.imgur.com/KDZ0exd.png" alt="" width="500px" height="400px" />

                </Grid> */}
                <Grid xs={3}>
                    <Profile/>
                </Grid>

                <Grid xs={9} style={{ backgroundColor: "white" }}>
                    <ListaPostagem />
                </Grid>
            </Grid>

        </>
    );
}

export default Home;