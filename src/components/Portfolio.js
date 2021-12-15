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
                <Box pt={10}>
                    <Grid container p={4} spacing={2}>
                        <Grid item md={4} xs={12}>
                            <ProjectCard imgPath='ssnl_logo.png' linkPath="https://www.ssnl.stanford.edu/">
                                <Typography variant='h5'>SSNL</Typography>
                                <Typography variant='body2'>Built a lab website for some really cool folks at Stanford.</Typography>
                            </ProjectCard>
                        </Grid>
                        <Grid item md={8} xs={12}>
                            <ProjectCard imgPath='jetalbert_mockup_sm.png' linkPath="https://www.jetalbertbeta.com/">
                                <Typography variant='h5'>JetAlbert</Typography>
                                <Typography variant='body2'>In 2020 I built a React web application for a small startup.</Typography>
                            </ProjectCard>
                        </Grid>
                        <Grid item md={4} xs={12}>
                            <ProjectCard imgPath='ProjectSlippi.png' linkPath="https://github.com/vladfi1/slippi-ai">
                                <Typography variant='h5'>Slippi</Typography>
                                <Typography variant='body2'>Teaching neural networks to be better than me at video games.</Typography>
                            </ProjectCard>
                        </Grid>
                        <Grid item md={4} xs={12}>
                            <ProjectCard imgPath='radial_design.png' linkPath="https://www.cathylewislcsw.com/">
                                <Typography variant='h5'>Cathy Lewis</Typography>
                                <Typography variant='body2'>In 2020 I built a portfolio website.</Typography>
                            </ProjectCard>
                        </Grid>
                        <Grid item md={4} xs={12}>
                            <ProjectCard imgPath='perch_battery.jpg'>
                                <Typography variant='h5'>Perch</Typography>
                                <Typography variant='body2'>In 2020 I redesigned a website for a Boston-based startup Perch.</Typography>
                            </ProjectCard>
                        </Grid>
                        <Grid item md={8} xs={12}>
                            <ProjectCard imgPath='work_vine.jpg' linkPath="workvineyard.com">
                                <Typography variant='h5'>Work Vineyard</Typography>
                                <Typography variant='body2'>In 2019 I built a website for a vineyard in Napa Valley.</Typography>
                            </ProjectCard>
                        </Grid>
                        <Grid item md={4} xs={12}>
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