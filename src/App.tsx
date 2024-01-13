import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '@styles/globalStyles';
import { theme } from '@styles/theme';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter } from 'react-router-dom';
import MainRouter from '@router/mainRouter';
import ScrollToTop from '@router/ScrollToTop';
import SocketRouter from '@router/socketRouter';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <BrowserRouter>
          <ScrollToTop />
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <MainRouter />
            <SocketRouter />
          </ThemeProvider>
        </BrowserRouter>
      </RecoilRoot>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
export default App;
