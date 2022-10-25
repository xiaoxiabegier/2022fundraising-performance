import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import {useContext} from "react";
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import {TabValueContext} from "./Layout";
import {useRouter} from "next/router";


export default function FloatingActionButtons() {


    const tabValueObj = useContext(TabValueContext)

    if (tabValueObj.tabValue === 0) return <div></div>;


    function handleClick(x){
        if (tabValueObj.tabValue === 1) window.open("/architectural3638castro");
        else if (tabValueObj.tabValue === 2) window.open("/architectural817825rodney");
        else if (tabValueObj.tabValue === 3) window.open("/architectural539blossom");
        else if (tabValueObj.tabValue === 4) window.open("/architectural61castro");
    }

    return (
            <Box className={"FloatingActionButtons"} >
                <Fab color = "secondary" variant="extended" onClick={handleClick}>
                    <FileDownloadIcon  />
                    architectural
                </Fab>
            </Box>
            );
}


