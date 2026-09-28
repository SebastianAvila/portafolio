import {Typography} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import {useState} from "react";

const ReadMore = ({children} : any) => {
    const text = children;
    const theme = useTheme();
    const accent = theme.palette.primary.main;
    const [isReadMore,
        setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    return (
        <Typography
            variant='h2'
            sx={{
            maxWidth: '570px',
            fontSize: {
                xs: '.82em',
                sm: '1em'
            }
        }}>

            {typeof text === 'string' && isReadMore
                ? text.slice(0, 90)
                : text}
            {typeof text === 'string' && text.length > 90 && (
            <span
                style={{
                cursor: 'pointer',
                color: accent
            }}
                onClick={toggleReadMore}>
                {isReadMore
                    ? "... read more"
                    : " show less"}
            </span>
            )}
        </Typography>
    );
};
export default ReadMore