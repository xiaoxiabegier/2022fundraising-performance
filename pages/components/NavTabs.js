import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {createTheme, ThemeProvider} from "@mui/material";
import {useRouter} from "next/router";
import {useContext, useState} from "react";

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

    const [value, setValue] = useState(0)

    const handleChange = (event, newValue) => {
        setValue(newValue);
        console.log(newValue)
        if (newValue === 0) router.push("/3638castro");
        else if (newValue === 1) router.push("/817825rodney");
        else if (newValue === 2) router.push("/539blossom");
        else if (newValue === 3) router.push("/61castro");
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
            main: 'rgb(110, 0, 255)',
        },
        text: {
            secondary: 'rgb(110, 0, 255)',
        },
    },
});