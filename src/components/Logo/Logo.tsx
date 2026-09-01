import {Box} from '@mui/material'
import CustomLink from '../Mui/CustomLink'
import {useRouter} from 'next/router';
import gsap from 'gsap';
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

const Logo = ({toggleDrawer, colorMode, color} : any) => {
    const router = useRouter()
    const scrollToHero = () => {
        if (router.pathname !== '/') {
            router.push('/').then(() => {
                setTimeout(() => gsap.to(window, {
                    duration: 1,
                    scrollTo: `#hero`
                }), 150);
            });
        } else {
            gsap.to(window, {
                duration: 1,
                scrollTo: `#hero`
            });
        }
    }
    return (
        <Box
            onClick={() => {
            toggleDrawer(false);
            scrollToHero();
        }}
            sx={{
                flex:1,
                cursor: 'pointer',
            display: 'flex',
            alignItems: 'center'
        }}>
            <CustomLink color={color} fontWeight='600' text='Bienvenidos a mi portafolio' href='/'/>
        </Box>
    )
}

export default Logo
