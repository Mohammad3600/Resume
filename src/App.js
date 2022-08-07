import './App.css';
import { Button, ThemeProvider } from '@material-ui/core';
import theme from './theme';
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
