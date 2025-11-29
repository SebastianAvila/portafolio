
// Controla el titulo y la descripcion de la seccion de Perks

import {Box, Container, Typography, Divider} from '@mui/material';
import PerkCard from './PerkCard';
import {useEffect} from 'react';
import gsap from 'gsap';
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import MainTitleAnimation from '../../../gsap/MainTitleAnimation';
import HandymanIcon from '@mui/icons-material/Handyman';
import HttpIcon from '@mui/icons-material/Http';
import DevicesIcon from '@mui/icons-material/Devices';

export const centeredStyles = {
    alignItems: 'center',
    textAlign: 'center',
    margin: '0 auto',
    width: '100%',
    display: 'flex',
    flexDirection: 'column'
}

gsap.registerPlugin(ScrollTrigger);

// informacion de las perks a mostrar
const perksArray = [{
    title:'Mejora continua',
    Icon:HandymanIcon,
    text:'Me gusta aprender de manera autonoma y constante, para estar al día con las últimas tecnologías y tendencias en desarrollo web. Esto me permite ofrecer soluciones innovadoras y eficientes a mis clientes.',
},
{
    title : 'Back-end development',
    text : 'Cuento con conocimientos sólidos en desarrollo back-end, lo que me permite crear aplicaciones web robustas y escalables. Con un enfoque en la eficiencia y la seguridad, me esfuerzo por construir sistemas que no solo funcionen bien, sino que también sean fáciles de mantener y ampliar con el tiempo.',
    Icon :  HttpIcon,
}   ,
{
    title : 'Frontend design/dev',
    Icon : DevicesIcon,
    text : 'Me gusta el diseño y desarrollo frontend, creando interfaces de usuario atractivas y funcionales. Con un enfoque en la experiencia del usuario, me esfuerzo por construir sitios web que no solo sean visualmente impresionantes, sino también intuitivos y fáciles de navegar.',
}
]
const Perks = () => {

    

    useEffect(() => {
        MainTitleAnimation('.h1','.h2')
    }, [])

    return ( <> <Container
        maxWidth='lg'
        sx={{
        margin: '0 auto',
        my: '4em'
    }}>
        <Box sx={centeredStyles}>
            <Typography
                className='h1 t25o0'
                variant='h1'
                sx={{
             
                fontSize: {
                    xs: '2.2em',
                    sm: '2.5em',
                    md: '3em'
                }
            }}
                fontWeight='600'>
              Me gusta aprender y mejorar cada día, para brindar el mejor servicio a mis clientes.
            </Typography>
            <Typography
                variant='h2'
                className='secondary h2'
                sx={{
                pt: '1.5em',
                transform: 'translateY(15px)',
                opacity: 0,
                maxWidth: '570px',
                fontSize: {
                    xs: '.8em',
                    sm: '1em'
                }
            }}>
                Mi objetivo es ofrecer soluciones web personalizadas que no solo cumplan, sino que superen las expectativas de mis clientes, ayudándolos a alcanzar el éxito en el mundo digital.
            </Typography>

            <Box
                sx={{
                mt: '3em',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '5%',
                justifyContent: {
                    xs: 'center',
                    sm: 'space-between'
                }
            }}>
                {perksArray.map(perk => {
                    return <PerkCard  key={perk.title} title={perk.title} text={perk.text} Icon={perk.Icon}/>
                })}
            </Box>
        </Box>
    </Container> < Divider /> </>)
}

export default Perks