import NavTabs from "./NavTabs.js"
import FloatingActionButtons from "./FloatingActionButtons";
import {createTheme, ThemeProvider} from "@mui/material";

export default function Layout({ children }){
    return(
        <>
        <ThemeProvider theme={theme}>
        <NavTabs/>
        <FloatingActionButtons/>
        {children }
       </ThemeProvider>

        </>
    )
}

const theme = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#f50057',
        },
        secondary: {
            main: 'rgb(110, 0, 255)',
        },
        text: {
            secondary: 'rgb(110, 0, 255)',
        },
    }
});