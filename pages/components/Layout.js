import NavTabs from "./NavTabs.js"
import FloatingActionButtons from "./FloatingActionButtons";
import {colors, createTheme, ThemeProvider} from "@mui/material";
import {createContext, useState} from "react";

export const TabValueContext = createContext(0)

export default function Layout({ children }){
    const [tabValue, setTabValue] = useState(0)
    return(
        <>
        <ThemeProvider theme={theme}>
        <TabValueContext.Provider value={{tabValue, setTabValue}}>
        <NavTabs/>
        <FloatingActionButtons/>
        {children }
        </TabValueContext.Provider>
        </ThemeProvider>    
        </>
    )
}

const theme = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: colors.black[900],
        },
        secondary: {
            main: colors.black[900],
        },
        text: {
            secondary: colors.black[900],
        },
    },
    typography: {
        fontFamily: ["Goldman Sans"]
    }
});
