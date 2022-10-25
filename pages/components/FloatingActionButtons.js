import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';

export default function FloatingActionButtons() {
    return (
            <Box className={"FloatingActionButtons"} sx={{ '& > :not(style)': { m: 1 } }}>
                <Fab color = "secondary" variant="extended">
                    <NavigationIcon sx={{ mr: 1 }} />
                    ARCITECTURAL
                </Fab>
            </Box>
            );
}



const fabLinks = {
    "3638castro": {architectural: "https://storage.googleapis.com/2022fundraising-website/3638/36%2038.pdf" },
    "817rodney": {architectural: "https://storage.googleapis.com/2022fundraising-website/825/817.pdf"},
    "825rodney": {architectural: "https://storage.googleapis.com/2022fundraising-website/825/825.pdf"},
    "539blossom": {architectural: "https://storage.googleapis.com/2022fundraising-website/539blossom/539.pdf"},
    "61castro": {architectural: "https://storage.googleapis.com/2022fundraising-website/61castro/61.pdf"}
}
