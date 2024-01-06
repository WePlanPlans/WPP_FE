import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '@styles/globalStyles';
import { theme } from '@styles/theme';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter } from 'react-router-dom';
import MainRouter from '@router/mainRouter';
import AuthRouter from '@router/authRouter';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <MainRouter />
            <AuthRouter />
          </ThemeProvider>
        </BrowserRouter>
      </RecoilRoot>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
export default App;
