import {TextField} from "@mui/material"
import {useContext} from "react"
import {ColorModeContext} from "../../../pages/_app"
import { IInput } from "../../Types/Types"

const Input = ({multi, mt, label,name, type} : IInput) => {
    const colorMode = useContext(ColorModeContext)
    const color = colorMode.mode === 'light'
        ? 'black'
        : 'white'
    return (<TextField
    name={name}
        type={type || 'text'}
        multiline={multi
        ? multi
        : false}
        rows={multi ? 5 : undefined}
        sx={{
        color,
        input: {
            color
        },
        textarea: {
            color
        },
        width: '100%',
        mt: mt
    }}
        label={label}
        variant="outlined"/>)
}
export default Input