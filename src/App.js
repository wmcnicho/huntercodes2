import { ThemeProvider, createTheme, AppBar, Toolbar, Typography } from '@mui/material';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import './App.css';
import About from './components/About';
import Ai from './components/Ai';
import Portfolio from './components/Portfolio';
import Pubs from './components/Pubs';
import Navbar from './NavBar';

let theme = createTheme({
  typography: {
    fontFamily:"Nunito Sans",
    h3: {
      fontFamily: 'Ubuntu Mono',
      fontWeight: 300,
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color:'#424242',
          textDecoration: 'none',
          ':hover': {
            textDecoration: 'underline'
          }
        }
      }
    },
  }
 })

function App() {
  return (
        <ThemeProvider theme={theme}>
          <div className="App">
                <BrowserRouter>
                  <Navbar />
                  <Switch>
                    <Route path={["/projects", "/code", "/codes", "/portfolio"]}>
                      <Portfolio/>
                    </Route>
                    <Route path={["/pubs", "/publications"]}>
                      <Pubs/>
                    </Route>
                    <Route path="/ai">
                      <Ai/>
                    </Route>
                    <Route path={["/about", "/hunter", "/"]}>
                      <About/>
                    </Route>
                  </Switch>
                </BrowserRouter>
          </div>
        </ThemeProvider>
  );
}

export default App;
