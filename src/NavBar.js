import { AppBar, Link, Toolbar, Typography } from '@mui/material';
import {Link as RouterLink} from 'react-router-dom';
import React from 'react'

class Navbar extends React.Component {
    constructor(props) {
        super(props); 
    }

    render() {
        return(
            <AppBar>
                <Toolbar sx={{backgroundColor:'white', flexDirection:'row'}}>
                    <Typography component='div' flexGrow='1' color='black' sx={{textAlign:'left'}}></Typography>
                    <Link component={RouterLink} to="/hunter"><Typography paddingX={2} color='black'>Hunter 🙋‍♂️</Typography></Link>
                    <Link component={RouterLink} to="/portfolio"><Typography paddingX={2} color='black'>Code 🖋</Typography></Link>
                    <Link component={RouterLink} to="/ai"><Typography paddingX={2} color='black'>AI 🤖</Typography></Link>
                </Toolbar>
            </AppBar>
        )
    }
}
export default Navbar