import { FC } from 'react';
import { ThemeProvider } from 'theme-ui';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import './assets/styles/app.scss';



export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const App: FC = () => {
  return (
    <div className='pageWrapper english'>
      <ThemeProvider >
        <QueryClientProvider client={queryClient}>
          <GlobalContextProvider>
            <Router>
              
            </Router>
          </GlobalContextProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </div>
  );
};

export default App;
