import './App.css';
import Main from './main';
import{ QueryClient , QueryClientProvider } from '@tanstack/react-query'


function App() {

  const client = new QueryClient({defaultOptions: {
    queries: {
      refetchOnWindowFocus : false
    }
  }})

  return (
    <QueryClientProvider client={client}>
    
    <Main/>
    </QueryClientProvider>
  );
}

export default App;
