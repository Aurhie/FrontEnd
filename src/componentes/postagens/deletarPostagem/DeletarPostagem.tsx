import React, { useEffect, useState } from 'react'
import {Typography, Button, Box, Card, CardActions, CardContent, Grid } from "@material-ui/core"
import './DeletarPostagem.css';
import { useHistory, useParams } from 'react-router-dom';
import Postagem from '../../../models/Postagem';
import { buscaId, deleteId } from '../../../service/Service';
import { useSelector } from 'react-redux';
import { UserState } from '../../../store/tokens/UserReducer';
import { toast } from 'react-toastify';

function DeletarPostagem() {

    let history = useHistory();
    const { id } = useParams<{id: string}>();
    const token = useSelector < UserState, UserState["tokens"]> (
      (state) => state.tokens
  );
    const [post, setPosts] = useState<Postagem>()

    useEffect(() => {
        if (token == "") {
          toast.error('Você precisa estar logado',{
            position: 'top-right',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: 'dark',
            progress: undefined
        });
            history.push("/login")
    
        }
    }, [token])

    useEffect(() =>{
        if(id !== undefined){
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaId(`/postagens/${id}`, setPosts, {
            headers: {
              'Authorization': token
            }
          })
        }

    async function sim() {
            history.push('/home')
            try {
               await deleteId(`/postagens/${id}`, {
                headers: { "Authorization": token }
             
            });
            toast.success('Postagem deletada com sucesso!', {
              position: 'top-right',
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: false,
              theme: 'dark',
              progress: undefined
            });
      } catch (error) {
            toast.error('Erro ao deletar postagem', {
              position: 'top-right',
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: false,
              theme: 'dark',
              progress: undefined
            })
          }
        }
                 
          function nao() {
            history.push('/home')
          }
          return (
            <>
              <Grid container direction='row' justifyContent='center' alignItems='center' className='container-deleta-postagens'>
                <Grid xs={12}>
                  <Box>  
                    <Typography className='titulo-deleta-postagem' variant='h4' gutterBottom>
                      Deletar Postagem
                    </Typography>
                    <Typography className='titulo-deleta-postagem' variant='h5' gutterBottom>
                      Tem certeza que deseja deletar esta postagem?
                    </Typography>
                  </Box>
                </Grid>
                <Box m={12} className='caixa-cards'>
                  <Card variant='outlined' className="caixa-post">
                            <CardContent>

                                <Box className="user-data">
                                    <img src={post?.usuario?.foto} className='user-picture' />

                                    <Box>
                                        <Typography variant='h5' component='h2' className="tituloPost">
                                            {post?.usuario?.nome}
                                            <br />
                                        </Typography>
                                        <Typography variant="body2" component="p" className='data-postagem'>
                                            {post?.data.substring(8, 10) + '/' +
                                                post?.data.substring(5, 7) + '/' +
                                                post?.data.substring(0, 4) + ' às ' +
                                                post?.data.substring(11, 19)}
                                        </Typography>
                                    </Box>

                                </Box>

                                <Typography variant='h5' component='h2' className="tituloPost">
                                    {post?.titulo}
                                </Typography>


                                <Typography variant='body2' component='p' className="textoPost">
                                    {post?.texto}
                                </Typography>
                            </CardContent>
        
                    <CardActions>
                      <Box display="flex" justifyContent="center" width='100%'>
                        <Box mx={2}>
                          <Button
                            onClick={sim}
                            variant="contained"
                            className="btnColor"
                            size='large'
                            color="primary">
                            Sim
                          </Button>
                        </Box>
        
                        <Box>
                          <Button
                            onClick={nao}
                            variant="contained"
                            size='large'
                            className="btnDelColor">
                            Não
                          </Button>
                        </Box>
                      </Box>
                    </CardActions>
                  </Card>
                </Box>
              </Grid>
            </>
          );
        }
export default DeletarPostagem;