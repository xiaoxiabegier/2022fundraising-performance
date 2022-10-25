import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import {useContext} from "react";
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import {TabValueContext} from "./Layout";
import {useRouter} from "next/router";


export default function FloatingActionButtons() {
    const router = useRouter()


    const tabValueObj = useContext(TabValueContext)

    if (tabValueObj.tabValue === 0) return <div></div>;


    function handleClick(){

        if (tabValueObj.tabValue === 1) router.push("/architectural3638castro");
        else if (tabValueObj.tabValue === 2) router.push("/architectural817825rodney");
        else if (tabValueObj.tabValue === 3) router.push("/architectural539blossom");
        else if (tabValueObj.tabValue === 4) router.push("/architectural61castro");


    }

    return (
            <Box className={"FloatingActionButtons"} sx={{ '& > :not(style)': { m: 1 } }}>
                <Fab color = "secondary" variant="extended" onClick={handleClick}>
                    <FileDownloadIcon  />
                    architectural
                </Fab>
            </Box>
            );
}


