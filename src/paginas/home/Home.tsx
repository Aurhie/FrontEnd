import react, { useEffect, useState } from 'react';
import { Paper, Box, Button, Grid, Typography, AppBar, Tab, Tabs } from '@material-ui/core';
import ListaPostagem from '../../componentes/postagens/listaPostagem/ListaPostagem';
import ModalPostagem from '../../componentes/postagens/modalPostagem/ModalPostagem';
import './Home.css';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { UserState } from '../../store/tokens/UserReducer';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Profile from '../../componentes/estaticos/profile/Profile';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaTemaFeed from '../../componentes/temas/listaTema/ListaTemaFeed';


function Home() {

    let history = useHistory();
    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    );

    const [value, setValue] = useState('1')

    function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
        setValue(newValue);

    }

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
                        <Profile />
                    </Grid>

                    <Grid xs={9} className='lista-postagem-container'>
                        <TabContext value={value} >
                            <AppBar position="static" className="appbarHome">
                                <Tabs centered onChange={handleChange} >
                                    <Tab label="Postagens" value="1" className="txtTab" />
                                    <Tab label="Temas" value="2" className="txtTab" />
                                </Tabs>
                            </AppBar>
                            <TabPanel value="1" >
                                <Box justifyContent="center">
                                    <ListaPostagem />
                                </Box>
                            </TabPanel>

                            <TabPanel value="2" >
                                <Box justifyContent="center">
                                    <ListaTemaFeed />
                                </Box>
                            </TabPanel>
                        </TabContext>
                    </Grid>
                </Grid>

            </>
        );
    }
export default Home;