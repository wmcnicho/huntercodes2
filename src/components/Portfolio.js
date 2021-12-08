import React from 'react'
import {Box, Grid, Typography} from '@mui/material';
import ProjectCard from './ProjectCard';

class Portfolio extends React.Component {
    constructor(props) {
        super(props); 
    }

    render() {
        return(
            <div>
                <Box pt={12}>
                    <Grid container p={4} spacing={2}>
                        <Grid item xs={4}>
                            <ProjectCard imgPath='ssnl_logo.png' linkPath="https://www.ssnl.stanford.edu/">
                                <Typography variant='h5'>SSNL</Typography>
                                <Typography variant='body2'>Stanford Social Neuroscience Lab</Typography>
                            </ProjectCard>
                        </Grid>
                        <Grid item xs={8}>
                            <ProjectCard imgPath='jetalbert_mockup.png' linkPath="https://www.jetalbertbeta.com/">
                                <Typography variant='h5'>JetAlbert</Typography>
                                <Typography variant='body2'>In 2020 I built a React web application for a small startup.</Typography>
                            </ProjectCard>
                        </Grid>
                        <Grid item xs={4}>
                            <ProjectCard imgPath='ProjectSlippi.png' linkPath="https://github.com/vladfi1/slippi-ai">
                                <Typography variant='h5'>Slippi</Typography>
                                <Typography variant='body2'>Teaching neural networks to be better than me at video games.</Typography>
                            </ProjectCard>
                        </Grid>
                        <Grid item xs={4}>
                            <ProjectCard imgPath='radial_design.png' linkPath="https://www.cathylewislcsw.com/">
                                <Typography variant='h5'>Cathy Lewis</Typography>
                                <Typography variant='body2'>In 2020 I built a portfolio website.</Typography>
                            </ProjectCard>
                        </Grid>
                        <Grid item xs={4}>
                            <ProjectCard imgPath='perch_battery.jpg'>
                                <Typography variant='h5'>Perch</Typography>
                                <Typography variant='body2'>In 2020 I redesigned a website for a Boston-based startup Perch.</Typography>
                            </ProjectCard>
                        </Grid>
                        <Grid item xs={8}>
                            <ProjectCard imgPath='lamya_cab_2018_crop.jpg' linkPath="workvineyard.com">
                                <Typography variant='h5'>Work Vineyard</Typography>
                                <Typography variant='body2'>In 2019 I built a website for a vineyard in Napa Valley.</Typography>
                            </ProjectCard>
                        </Grid>
                        <Grid item xs={4}>
                            <ProjectCard imgPath='dragonbot1.jpg' linkPath="https://www.youtube.com/watch?v=jDC4gEA5FE0">
                                <Typography variant='h5'>DragonBot Card Games</Typography>
                                <Typography variant='body2'>For my senior capstone project at USC I worked in a small team to build a tablet card game experience with a robot.</Typography>
                            </ProjectCard>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        )
    }
}
export default Portfolio