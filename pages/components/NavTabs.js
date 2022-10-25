import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {createTheme, ThemeProvider, useTheme} from "@mui/material";
import {useRouter} from "next/router";
import {useContext, useEffect, useState} from "react";
import {TabValueContext} from "./Layout";

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
    const tabValueObj = useContext(TabValueContext)

    const router = useRouter()

    useEffect(()=> {
        if(router.pathname === "/all") tabValueObj.setTabValue(0)
        else if (router.pathname === "/3638castro")  tabValueObj.setTabValue(1);
        else if (router.pathname === "/817825rodney")  tabValueObj.setTabValue(2)
        else if (router.pathname === "/539blossom")  tabValueObj.setTabValue(3)
        else if (router.pathname === "/61castro")  tabValueObj.setTabValue(4)

        router.prefetch("/all")
        router.prefetch("/3638castro")
        router.prefetch("/817825castro")
        router.prefetch("/539blossom")
        router.prefetch("/61castro")
    })

//    const [value, setValue] = useState(0)

    const handleChange = (event, newValue) => {
        tabValueObj.setTabValue(newValue);

//        setValue(newValue)
        console.log(newValue)
        if (newValue === 0) router.push("/all");
        else if (newValue === 1) router.push("/3638castro");
        else if (newValue === 2) router.push("/817825rodney");
        else if (newValue === 3) router.push("/539blossom");
        else if (newValue === 4) router.push("/61castro");
    };

    return (
            <div className={"NavTabs"}>
            <Box sx={{width: '100%'}}>
                <Tabs variant={"scrollable"} textColor="secondary" indicatorColor="secondary" tabPosition="top" value={tabValueObj.tabValue} onChange={handleChange}
                      aria-label="nav tabs example">
                    <LinkTab label="all" href="/all"/>
                    <LinkTab label="36 38 Castro St" href="/3638castro"/>
                    <LinkTab label="817 825 Rodney Dr" href="/817825rodney"/>
                    <LinkTab label="539 Blossom Way" href="/539blossom"/>
                    <LinkTab label="61 Castro St" href="/61castro"/>
                </Tabs>
            </Box>
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