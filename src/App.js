import { ThemeProvider, createTheme, AppBar, Toolbar, Typography } from '@mui/material';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import './App.css';
import Portfolio from './components/Portfolio';
import Navbar from './NavBar';

let theme = createTheme({
  typography: {
    fontFamily:"Nunito Sans",
    h3: {
      fontFamily: 'Ubuntu Mono',
      fontWeight: 300,
    },
  }
 })

function App() {
  return (
        <ThemeProvider theme={theme}>
          <div className="App">
                <BrowserRouter>
                  {/* <Navbar /> */}
                  <Typography variant="h3">TODO: Finish this website</Typography>
                  <Switch>
                    <Route path="/projects">
                    </Route>
                    <Route path="/ai">
                    </Route>
                    <Route path="/hunter">
                    </Route>
                    <Route path="/">
                      <Portfolio/>
                    </Route>
                  </Switch>
                </BrowserRouter>
          </div>
        </ThemeProvider>
  );
}

export default App;
