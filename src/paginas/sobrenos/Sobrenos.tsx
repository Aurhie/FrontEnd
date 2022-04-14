import { Box, Grid, Typography } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedIn from '@material-ui/icons/LinkedIn';
import { Link } from 'react-router-dom';
import './Sobrenos.css';



function Sobrenos() {
    return (
        <Grid container>
            <Grid item container xs={12} direction='column'>
                <Typography variant="h3" className="tituloSobreNos">A ColaboraTech </Typography>

                <Typography className="textoSobreNos">
                    Baseada no Objetivo de Desenvolvimento Sustentável de número 4 da ONU, que visa Garantir o acesso à
                    educação inclusiva, de qualidade e equitativa, e promover oportunidades de aprendizagem ao longo da vida
                    para todos, a ColaboraTech surgiu com a intenção de unir voluntáries e alunes para compartilhar conhecimento
                    relacionado à área de tecnologia. Criando assim oportunidades para minorias terem acesso a um ensino de qualidade
                    e motivando as próximas gerações a participarem ativamente do setor de Tecnologia da Informação, tanto no mercado
                    de trabalho quanto na esfera acadêmica.
                </Typography>

                <Typography variant='h5' className='tituloSobreNos'> Nossa Equipe </Typography>
            </Grid>
            <Grid item container xs={12}>
                <Grid item container>
                    <Grid item xs={12}>
                        <Box className="integrante-left">
                            <Box>
                                <img src="https://avatars.githubusercontent.com/u/97414841?v=4" alt="Foto de perfil de Aurora Marques" className="foto" />
                                <Typography variant="h5" className="nomes">Aurora Marques</Typography>
                            </Box>


                            <Typography className='texto'>
                                Tenho 21 anos, moro em São Paulo. Sou Dev full-stack, porém com mais afinidade com o front end.
                                Em transição de carreira, Sou uma pessoa que ama se expressar de forma criativa, e a programação
                                me proporciona infinitas formas de demonstrar minhas ideias, com potencial e liberdade ilimitados
                                para dar vida aos meus projetos.
                            </Typography>
                            <Box className='redes'>
                                <a href="https://github.com/Aurhie" target="_blank">
                                    <GitHubIcon className='redes' />
                                </a>
                                <a href="https://www.linkedin.com/in/aurora-lúcia-marques-989aba226/" target="_blank">
                                    <LinkedIn className='redes' />
                                </a>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} alignItems="center">
                        <Box className="integrante-right">

                            <Box className='redes'>
                                <a href="https://github.com/LunaRibeiro" target="_blank">
                                    <GitHubIcon className='redes' />
                                </a>
                                <a href="https://www.linkedin.com/in/luna-ribeiro-alves/" target="_blank">
                                    <LinkedIn className='redes' />
                                </a>
                            </Box>

                            <Typography className='texto'>
                                Cursando Ciência da Computação na UTFPR estou em busca de oportunidade de emprego de estágio,
                                trainee ou júnior como desenvolvedora, afim de adquirir mais experiências, me desenvolver pessoal
                                e profissional pois pretendo impactar positivamente a vida das pessoas através da tecnologia.
                            </Typography>

                            <Box><img src="https://avatars.githubusercontent.com/u/86332474?v=4" alt="Foto de perfil de Luna Ribeiro" className="foto" />
                                <Typography variant="h5" className="nomes">Luna Ribeiro</Typography>
                            </Box>

                        </Box>
                    </Grid>
                    <Grid item xs={12} alignItems="center">
                        <Box className="integrante-left">
                            <Box>
                                <img src="https://avatars.githubusercontent.com/u/65250872?v=4" alt="Foto de perfil de Mariana Neves" className="foto" />
                                <Typography variant="h5" className="nomes">Mariana Neves</Typography>
                            </Box>

                            <Typography className='texto'>
                                Tecnóloga em Design Gráfico, atuei na área por 6 anos e me encontro em transição
                                de carreira. Sou estudante de Design de Mídias Digitais na Fatec Barueri e
                                Desenvolvedora Web Java Júnior formada pela Generation. Fui voluntária nos Jogos
                                Olímpicos em 2016 atuando como escolta do controle de doping.
                            </Typography>
                            <Box className='redes'>
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
                    <Grid item xs={12} alignItems="center">
                        <Box className="integrante-right">

                            <Box className='redes'>
                                <a href="https://github.com/MatheusOliveira-1" target="_blank">
                                    <GitHubIcon className='redes' />
                                </a>
                                <a href="https://www.linkedin.com/in/mo-dev/" target="_blank">
                                    <LinkedIn className='redes' />
                                </a>
                            </Box>

                            <Typography className='texto'>
                                Olá, tenho 25 anos e moro na cidade de São Paulo.
                                Recentemente me formei como Desenvolvedor Java Full Stack, na Generation Brasil,
                                e estouem busca de uma oportunidade de emprego na área de desenvolvimento.
                                Na parte técnica deste curso tive a oportunidade de criar uma API utilizando em linhas
                                gerais SpringBoot no back-end e ReactJs no front-end.
                                Também tive a chance de desenvolver minhas soft skills como trabalho em equipe e atenção
                                aos detalhes, e ver tudo isso sendo utilizado
                                na prática no meu projeto integrador em grupo, onde implementamos a metodologia ágil SCRUM.
                            </Typography>

                            <Box>
                                <img src="https://avatars.githubusercontent.com/u/97600307?v=4" alt="Foto de perfil de Matheus Oliveira" className="foto" />
                                <Typography variant="h5" className="nomes">Matheus Oliveira</Typography>
                            </Box>

                        </Box>
                    </Grid>
                    <Grid item xs={12} alignItems="center">
                        <Box className="integrante-left">

                            <Box>
                                <img
                                    src="https://avatars.githubusercontent.com/u/95011770?v=4"
                                    alt="Foto de perfil de Pedro Rodrigues"
                                    className="foto" />

                                <Typography variant="h5" className="nomes">Pedro Rodrigues</Typography>
                            </Box>

                            <Typography className='texto'>
                                Tenho 24 anos, residente de Pirituba São Paulo. Assistente Social de formação,
                                me encontro em transição de Carreira e, por desde criança, ser alguém diretamente
                                ligado à tecnologia, devido ao ótimo ensino básico que pude ter, escolhi dar esse
                                próximo passo junto à Generation.
                                Para que possam me conhecer melhor, ao final da apresentação, deixarei meu Linkedin disponível.
                            </Typography>

                            <Box className='redes'>
                                <a href="https://github.com/pedrocadeoz" target="_blank">
                                    <GitHubIcon className='redes' />
                                </a>
                                <a href="https://www.linkedin.com/in/pedro-rodriguesss/" target="_blank">
                                    <LinkedIn className='redes' />
                                </a>
                            </Box>

                        </Box>
                    </Grid>
                    <Grid item xs={12} alignItems="center">
                        <Box className="integrante-right">

                            <Box className='redes'>
                                <a href="https://github.com/sarahprog" target="_blank">
                                    <GitHubIcon className='redes' />
                                </a>
                                <a href="https://www.linkedin.com/in/sarah-ramos-09617b1ba/" target="_blank">
                                    <LinkedIn className='redes' />
                                </a>
                            </Box>

                            <Typography className='texto'>
                                Desenvolvedora Full Stack Java. Museóloga, formada pela Universidade de Brasília -
                                UnB e capoeirista. Atualmente em transição de carreira para a área tech. Acredito no
                                poder transformador da tecnologia. Trabalho de forma resolutiva e assertiva, utilizando
                                todos os conhecimentos que recebi no bootcamp da Generation.  Acesse meu linkedIn e Git hub
                                para mais informações.
                            </Typography>


                            <Box>
                                <img
                                    src="https://avatars.githubusercontent.com/u/98063540?v=4"
                                    alt="Foto de perfil de Sarah Ramos"
                                    className="foto" />

                                <Typography variant="h5" className="nomes">Sarah Ramos</Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
                <Grid item container direction='row' justifyContent='center' alignItems="center">
                    <Grid item xs={12} alignItems="center">
                        <Box className="integrante-left">
                            <Box>
                                <img src="https://avatars.githubusercontent.com/u/97924205?v=4" alt="Foto de William Oliveira" className="foto" />
                                <Typography variant="h5" className="nomes">William Oliveira</Typography>
                            </Box>

                            <Typography className='texto'>
                                Tenho 29 anos moro em São Paulo capital, estou em transição de carreira para área
                                de tecnologia pq acredito no poder que ela tem de transformar a vidas das pessoas
                                e hoje sou formando em Desenvolvimento Java jr pela generation agradeço a atenção
                                de todos .
                            </Typography>

                            <Box className='redes'>
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