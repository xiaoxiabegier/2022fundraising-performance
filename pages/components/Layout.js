import NavTabs from "./NavTabs.js"
import FloatingActionButtons from "./FloatingActionButtons";
import {colors, createTheme, ThemeProvider} from "@mui/material";

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
            main: colors.orange[900],
        },
        secondary: {
            main: colors.orange[900],
        },
        text: {
            secondary: colors.orange[900],
        },
    },
    typography: {
        fontFamily: ["Goldman Sans"]
    }
});