import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState } from 'react';

const App = ({ Component, pageProps }) => {
  const [client] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={client}>
      <Component {...pageProps} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default App;
