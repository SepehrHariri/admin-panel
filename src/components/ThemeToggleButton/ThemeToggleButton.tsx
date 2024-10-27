import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import React from "react"
import { useTheme } from "@mui/system";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

export type ThemeToggleButtonProps = {
    ColorModeContext: React.Context<{ toggleColorMode: () => void; }>
}

const ThemeToggleButton = (props: ThemeToggleButtonProps) => {

    const mobileCheck = useMediaQuery('(min-width: 500px)');



    const { ColorModeContext = React.createContext({ toggleColorMode: () => {} }) } = props;
    const theme = useTheme();
    
}

export default ThemeToggleButton