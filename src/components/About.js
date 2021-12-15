import { Box, Grid, Link, Typography } from '@mui/material';
import React from 'react'

class About extends React.Component {
    constructor(props) {
        super(props); 
    }

    render() {
        return(
            <Box pt={12}>
                <Grid container spacing={2} p={3}>
                    <Grid item md={4} xs={12}>
                        <Box>
                            <Box sx={{  
                                        "& img":{
                                            height:250,
                                            width:250,
                                            objectFit:'cover',
                                            objectPosition:'left',
                                            borderRadius:'50%',   
                                        }
                                    }} pb={2}>
                                <img src={process.env.PUBLIC_URL + '/img/hunter_small.jpg'}></img>
                            </Box>
                            <Typography variant="h4">Hunter McNichols</Typography>
                            <Typography variant="h5">Engineer and Educator</Typography>
                            <Typography variant="h5"><Link href='https://www.ccny.cuny.edu/'>CCNY</Link> <Link href='https://huntercodes.com/hunter'>HunterCodes</Link></Typography>
                        </Box>
                    </Grid>
                    <Grid item md={8} xs={12} sx={{textAlign:'left'}}>
                        <Typography variant="h4">Who is Hunter?</Typography>
                        <Typography>I have been obsessed with computers and technology for longer than my working memory. This vice led me to pursue a join bachelor-master degree in Computer Science at University of Southern California ✌️.<br/><br/></Typography>
                        <Typography>After graduating, I worked at Apple as a software engineer on Siri. I worked on a cross-platform team and developed server-side frameworks, mobile frameworks, and just about everything in between. A very scary stack of NDAs make this experience hard describe in detail, but I can say that I have become intimately familiar with GUS architectures and the challenges in building these systems at scale.<br/><br/></Typography>
                        <Typography>In 2019, I relocated from the Bay Area to New York where I continue to get lost in the subway systems and remind myself what seasons are. Here I started HunterCodes and have worked with small businesses and startups to bring their ideas online. I mostly do web related builds so you could call me a full-stack engineer but I work in offline environments as well.<br/><br/></Typography>
                        <Typography>One year later, I started teaching a course on teach Artificial Intelligence at City College of New York. I love to teach and doing so has reignited my passion for computer science. If you are a prospective student you can take a gander at the syllabus and assignments from a previous semester. I am now aspiring to go back into academics and get a PhD in Computer Science.<br/><br/></Typography>
                        <Typography>In my free time, I teach neural networks to be better than me at video games, take Japanese lessons, and obediently tend to the whims of two cats. 😼</Typography>
                    </Grid>
                </Grid>
            </Box>
        )
    }
}
export default About