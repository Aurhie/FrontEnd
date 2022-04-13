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
        
            <Grid container direction="row" justifyContent='center' className='corFundo'>
                <Grid xs={3} className='profile-container'>
                    <Profile/>
                </Grid>

                <Grid xs={9} className='lista-postagem-container'>
                    <ListaPostagem />
                </Grid>
            </Grid>

        </>
    );
}

export default Home;