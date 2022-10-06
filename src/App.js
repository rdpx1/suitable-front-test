// import { AppContext } from './context';
import { SWRConfig } from 'swr';
import './App.css';

import ComponentPage from "./components/pages/ComponentPage/ComponentPage";
import useFetch from './hooks/fetch/useFetch';

const App = () => {

  const { callFetch } = useFetch();

  return (
    <>
      <div className="container-holder">
        <SWRConfig
            value={{
              revalidateOnFocus: false,
              refreshInterval: 0,
              fetcher: (path, method) => 
                callFetch(path, method)
            }}        
        >
        <ComponentPage/>
        </SWRConfig>
      </div>
    </>
  );
}

export default App;