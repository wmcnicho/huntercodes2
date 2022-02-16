import { Box, Grid, IconButton, Link, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
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
                            <Typography variant="h5"><Link href='https://www.ccny.cuny.edu/'>CCNY</Link> <Link href='.'>HunterCodes</Link></Typography>
                            <Box display='flex' justifyContent='center'>
                                <IconButton href="https://github.com/wmcnicho">
                                    <GitHubIcon />
                                </IconButton>
                                <IconButton href="https://www.linkedin.com/in/wmcnicho/">
                                    <LinkedInIcon />
                                </IconButton>
                                <IconButton href={process.env.PUBLIC_URL + '/files/resume_public_12_15_pdf.pdf'}>
                                    <FileOpenIcon />
                                </IconButton>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item md={7} xs={12} sx={{textAlign:'left'}}>
                        <Typography variant="h4">Who is Hunter?</Typography>
                        <Typography>I have been obsessed with computers and technology for longer than my working memory. This vice led me to complete a joint bachelor-master Computer Science program in 2016 at University of Southern California ✌️.<br/><br/></Typography>
                        <Typography>After graduating, I worked at Apple as a software engineer on Siri. I was on a cross-platform team where I developed server-side frameworks, mobile frameworks, and just about everything in between. A very scary stack of NDAs makes this experience hard describe in detail, but I can say that I have become intimately familiar with <Link href="https://nlp.stanford.edu/acvogel/gus.pdf">GUS architectures</Link> and the challenges in building these systems at scale.<br/><br/></Typography>
                        <Typography>In 2019, I relocated from the Bay Area to New York where I continue to get lost in the subway systems and remind myself what seasons are. Here I started HunterCodes where I work with small businesses and startups to bring their ideas online. I mostly do web related builds so you could call me a full-stack engineer but I work in offline environments as well.<br/><br/></Typography>
                        <Typography> One year later, I developed and began teaching a course on artificial intelligence at City College of New York. I love to teach and <Link href="https://www.ratemyprofessors.com/ShowRatings.jsp?tid=2689331">some of my students like it too</Link>! If you are a prospective student you can take a gander at the <Link href={process.env.PUBLIC_URL + '/files/cs44800_syllabus_fall_public_pdf.pdf'}>syllabus</Link> and <Link href="https://hmcnich.gitbook.io/csc448-f21/">assignments</Link> from a previous semester.<br/><br/></Typography>
                        <Typography>Teaching has reignited my passion for computer science, and I aspire to go back into academics and contribute to the field through a PhD program. Inspired by my time working on Siri, my research interests broadly lie in natural language processing (NLP) and human-robot interaction. Within the field of NLP,  I am interested in natural language understanding, generative tasks and conversational modeling. Specifically, I am intrigued by how advancements in these areas can be leveraged to create more sophisticated chatbots and dialog systems.<br/><br/></Typography>
                        <Typography>In my free time, I teach neural networks to be better than me at video games, take Japanese lessons, and obediently tend to the whims of two cats. 😼</Typography>
                    </Grid>
                </Grid>
            </Box>
        )
    }
}
export default About