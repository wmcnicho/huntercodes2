import { Box, Typography } from '@mui/material';
import React from 'react'

class About extends React.Component {
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
export default About