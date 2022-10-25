import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {createTheme, ThemeProvider} from "@mui/material";
import {useRouter} from "next/router";
import {useContext} from "react";

function LinkTab(props) {
    return (
        <Tab
            component="a"
            onClick={(event) => {
                event.preventDefault();
            }}
            {...props}
        />
    );
}

export default function NavTabs() {

    const router = useRouter()

    const valueObj = useContext()

    const handleChange = (event, newValue) => {
        valueObj.setValue(newValue);
        if (valueObj.value === 0) router.push("/3638castro");
        else if (valueObj.value === 1) router.push("/817825rodney");
        else if (valueObj.value === 2) router.push("/539blossom");
        else if (valueObj.value === 3) router.push("/61castro");
    };

    return (
            <div className={"NavTabs"}>
        <ThemeProvider theme={theme}>
            <Box sx={{width: '100%'}}>
                <Tabs textColor="secondary" indicatorColor="secondary" tabPosition="top" value={value} onChange={handleChange}
                      aria-label="nav tabs example">
                    <LinkTab label="36 38 Castro St" href="/3638castro"/>
                    <LinkTab label="817 825 Rodney Dr" href="/817825rodney"/>
                    <LinkTab label="539 Blossom Way" href="/539blossom"/>
                    <LinkTab label="61 Castro St" href="/61castro"/>
                </Tabs>
            </Box>
        </ThemeProvider>
                </div>

    );
}


const theme = createTheme({
    palette: {
        type: 'light',
        primary: {
            main:  '#f50057',
        },
        secondary: {
            main: 'rgba(162,12,255,0.54)',
        },
        text: {
            secondary: 'rgba(162,12,255,0.54)',
        },
    },
});