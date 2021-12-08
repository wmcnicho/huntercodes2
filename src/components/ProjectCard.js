import { Paper, Box, Typography, Link } from '@mui/material';
import React from 'react'

class ProjectCard extends React.Component {
    constructor(props) {
        super(props); 
    }

    render() {
        return(
            <div style={{borderRadius:'4px', overflow:"hidden"}}>
                <Paper sx={{backgroundImage: 'url('+ process.env.PUBLIC_URL + '/img/' + this.props.imgPath +')',
                            height:"350px",
                            backgroundPosition:'center',
                            backgroundSize:'cover',
                            ":hover":{
                                transform:"scale(1.25)"
                            },
                            "&:hover .MuiBox-root":{
                                display:'flex'
                            }
                            }} > 
                            <Link href={this.props.linkPath} sx={{textDecoration:'none'}}>
                                <Box sx={{
                                    height:"350px",
                                    width:"100%",
                                    display:'none',
                                    zIndex:2,
                                    backgroundColor:'rgba(0,0,0,0.7)',
                                    flexDirection:'column',
                                    justifyContent:'center',
                                    color:"#FFF",
                                }}>
                                    <Box sx={{transform:"scale(0.8)",
                                    display:"flex",
                                    flexDirection:'column',
                                    justifyContent:'center',
                                    color:"#FFF",
                                    textDecoration:"none"
                                    }}>
                                        {this.props.children}
                                    </Box>
                                </Box>
                            </Link>
                </Paper>
            </div>
        )
    }
}
export default ProjectCard