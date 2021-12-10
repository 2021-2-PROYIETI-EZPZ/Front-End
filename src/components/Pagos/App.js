import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import theme from './Const/theme';
import Header from './Vistas/Header';
import Foot from './Vistas/Foot';
import Pagos from './Vistas/pago';

const App = () => <ThemeProvider theme={theme}>
    <Header />
    <Pagos />
    <Foot />
</ThemeProvider>
   
export default App;