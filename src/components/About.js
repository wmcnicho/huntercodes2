import { Box, Grid, IconButton, Link, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SchoolIcon from '@mui/icons-material/School';
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
                                <img src={process.env.PUBLIC_URL + '/img/headshot.png'}></img>
                            </Box>
                            <Typography variant="h4">Hunter McNichols</Typography>
                            <Typography variant="h5">Teacher of Humans and Machines</Typography>
                            <Typography variant="h5"><Link href='https://www.cics.umass.edu/'>UMass Amherst</Link></Typography>
                            <Box display='flex' justifyContent='center'>
                                <IconButton href="https://github.com/wmcnicho">
                                    <GitHubIcon />
                                </IconButton>
                                <IconButton href="https://www.linkedin.com/in/wmcnicho/">
                                    <LinkedInIcon />
                                </IconButton>
                                <IconButton href={process.env.PUBLIC_URL + '/files/CV_10_10_25.pdf'}>
                                    <FileOpenIcon />
                                </IconButton>
                                <IconButton href="https://scholar.google.com/citations?user=ucPEkvoAAAAJ">
                                    <SchoolIcon />
                                </IconButton>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item md={7} xs={12} sx={{textAlign:'left'}}>
                        <Typography variant="h4">Who is Hunter?</Typography>
                        <Typography>I'm a PhD candidate at the University of Massachusetts Amherst, where my research explores how large language models can be used to understand an support student learning. My work bridges natural language processing, intelligent tutoring systems, and scalable student support. I explore the capabilities of LLMs for applications in education technologies and explore the impact of these technologies in the classroom by analyzing student behavior and their influence on learning outcomes. You can explore my work <Link href="https://scholar.google.com/citations?user=ucPEkvoAAAAJ">here</Link>.</Typography>
                        <Typography>Alongside my research, I've developed and taught courses on artificial intelligence both at the City College of New York and the University of Massachusetts Amherst. My course design is heavily inspired by my experience as a software engineer and is focused on practical applications of artificial intelligence. I believe students learn best when they can apply concepts to solve real world problems and build skills that will help them in pursuing their interests. If you’re a prospective student, you can browse the <Link href={process.env.PUBLIC_URL + '/ files/cs44800_syllabus_fall_public_pdf.pdf'}>syllabus</Link> and <Link href="https://hmcnich.gitbook.io/csc448-f21/">assignments</Link> from a past semester.</Typography>
                        <Typography>Before pursuing my PhD, I worked as a software engineer at Apple on the Siri team, where I developed a distributed platform for a large-scale natural language processing system. I also founded HunterCodes, a freelance web development business focused on building web platforms and prototypes for small businesses and startups.</Typography>
                        <Typography>In my free time, I enjoy training neural networks to beat me at video games, taking Japanese lessons, and obediently tending to the whims of two cats. 😼</Typography>
                        {/* <Typography>I have been obsessed with computers and technology for longer than my working memory. This vice led me to complete a joint bachelor-master Computer Science program in 2016 at University of Southern California ✌️.<br/><br/></Typography>
                        <Typography>After graduating, I worked at Apple as a software engineer on Siri. I was on a cross-platform team where I developed server-side frameworks, mobile frameworks, and just about everything in between. A very scary stack of NDAs makes this experience hard describe in detail, but I can say that I have become intimately familiar with <Link href="https://nlp.stanford.edu/acvogel/gus.pdf">GUS architectures</Link> and the challenges in building these systems at scale.<br/><br/></Typography>
                        <Typography>In 2019, I relocated from the Bay Area to New York, where I navigated the subway system, remembered what seasons feel like, and launched HunterCodes — my freelance business focused on building web platforms for small businesses and startups. I mostly took on full-stack work, but also tackled offline and unconventional builds.<br/><br/></Typography>
                        <Typography>While in New York, I developed and began teaching a course on artificial intelligence at the City College of New York. I love to teach and <Link href="https://www.ratemyprofessors.com/ShowRatings.jsp?tid=2689331">some of my students liked it too</Link>! If you’re a prospective student, you can browse the <Link href={process.env.PUBLIC_URL + '/ files/cs44800_syllabus_fall_public_pdf.pdf'}>syllabus</Link> and <Link href="https://hmcnich.gitbook.io/csc448-f21/">assignments</Link> from a past semester.<br/><br/></Typography>
                        <Typography>Teaching reignited my passion for computer science and led me to pursue a PhD in Computer Science, where I now focus on applied artificial intelligence for education. My research sits at the intersection of natural language processing (NLP), intelligent tutoring systems, and scalable student support. I’m especially interested in conversational modeling, feedback generation, and how advances in language models can help build better learning technologies.<br/><br/></Typography>
                        <Typography>In my free time, I enjoy training neural networks to beat me at video games, taking Japanese lessons, and obediently tending to the whims of two cats. 😼</Typography> */}
                    </Grid>
                </Grid>
            </Box>
        )
    }
}
export default About