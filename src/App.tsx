import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/theme/defaultTheme';
import { Router } from "./Router";
import { GlobalStyles } from './styles/global';

export function App() {
  return (
    <BrowserRouter>
    <ThemeProvider theme={defaultTheme}>
    <GlobalStyles />
    <Router />
    </ThemeProvider>
    </BrowserRouter>
  )
}

