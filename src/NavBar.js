import { AppBar, Link, Toolbar, Typography } from '@mui/material';
import React from 'react'

class Navbar extends React.Component {
    constructor(props) {
        super(props); 
    }

    render() {
        return(
            <AppBar>
                <Toolbar sx={{backgroundColor:'white', flexDirection:'row'}}>
                    <Typography component='div' flexGrow='1' color='black' sx={{textAlign:'left'}}>Home</Typography>
                    <Link><Typography paddingX={2} color='black'>Portfolio 🖋</Typography></Link>
                    <Link><Typography paddingX={2} color='black'>AI 🤖</Typography></Link>
                    <Link><Typography paddingX={2} color='black'>About 🙋‍♂️</Typography></Link>
                </Toolbar>
            </AppBar>
        )
    }
}
export default Navbar