import { Box, Typography } from '@mui/material';

const PerkCard = ({text,title,Icon} : any) => {
    return (
        <Box
            className='perkCard'
            sx={{
                opacity:0,
                transform: 'translateY(15px)',
            width: {
                xs: '90%',
                sm: '45%',
                md: '30%'
            },
            my: '2em'
        }}>
        {Icon &&    <Icon
            className='cardIcon'
                sx={{
              
                boxSizing: 'content-box',
                background: '#0092ff',
                color: 'white',
                padding: '.55em',
                borderRadius: '50%'
            }}
                fontSize='medium'/>}
            <Typography
                variant='h2'
                sx={{
                pt: '.5em',
             
            }}
                fontWeight='400'
                fontSize='1.5em'>
              {title}
            </Typography>
            <Typography
                variant='h3'
                sx={{
                pt: '1em'
            }}
                fontWeight='300'
                fontSize='.8em'
                className='secondary'>
                {text}
            </Typography>

        </Box>
    )
}

export default PerkCard