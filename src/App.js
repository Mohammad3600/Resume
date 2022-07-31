import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import MarketPlace from './components/MarketPlace';
import Resume from './components/Resume';
import { Button, ThemeProvider } from '@material-ui/core';
import theme from './theme';
import ExportResume from './components/ExportResume';
import { useRef } from 'react';
import {BrowserRouter} from "react-router-dom"
import AllRoutes from './AllRoutes';

function App() {
  return (
    <>
    {/* <Button onClick={()=> setRecords("Amaterasu")}>Click</Button>
      <MarketPlace /> */}
        <ThemeProvider theme={theme}>

            <AllRoutes />
     

        </ThemeProvider>
      {/* <div>Amaterasu</div> */}

      {/* <Footer /> */}
    </>  
  );
}

export default App;
