import { PaletteMode, createTheme } from '@mui/material';
import {  Dispatch, SetStateAction, useMemo, useState } from 'react'





const ThemeHook = (mode : 'light' | 'dark',setMode :  Dispatch<SetStateAction<"light" | "dark">>) => {
  
    const color = mode === 'light'
    ? '#15171c'
    : '#ffffff'
    const getDesignTokens = (mode : PaletteMode) => ({
        typography: {
            "fontFamily": `'Montserrat', sans-serif`,
            "fontSize": 16,
            h1: {
                color
            },
            h2: {
                color: mode === 'light'
                    ? '#2b2d33'
                    : '#b9b9b9',
                lineHeight: '1.3em'

            },
            h3: {
                color: mode === 'light'
                    ? '#5b5f66'
                    : '#a7a7a7',
                lineHeight: '1.3em'

            }
        },
        button: {
            'borderRadius': '5000px'
        },

        palette: {

            mode,

            ...(mode === 'light'
                ? {
                    // Acento: morado (marca personal) en tema claro
                    primary: {
                        main: '#360a5c'
                    },

                    // palette values for light mode: blanco empresarial, no blanco puro
                    // (deja que las tarjetas blancas -white puro- resalten sobre este fondo)

                    divider: '#e2e4e8',
                    Drawer: '#ffffff',

                    background: {
                        default: '#f6f7f9',
                        paper: '#ffffff'
                    },

                    text: {
                        primary: '#15171c'
                    },
                }
                : {

                    // palette values for dark mode
                  divider: '#353535',
                    background: {
                        default: '#232323'
                    },
                    // Acento: azul en tema oscuro
                    primary: {
                        main: '#0092ff'
                    },
                    text: {
                        // antes estaba en '#000000': texto negro sobre fondo oscuro, invisible
                        primary: '#ffffff'
                    }
                })
        }
    });

  
    return getDesignTokens
}

export default ThemeHook