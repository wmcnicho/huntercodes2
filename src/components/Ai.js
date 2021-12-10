import React from 'react'
import { Box, Typography } from '@mui/material';

class Ai extends React.Component {
    constructor(props) {
        super(props); 
    }

    render() {
        return(
            <Box pt={12}>
                <Typography variant="h3">Cooking up the right words, check back soon.</Typography>
            </Box>
        )
    }
}
export default Ai