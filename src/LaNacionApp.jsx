import React from 'react';
import AppRouter from './routers/AppRouter';
import { ArticlesContext } from './context/ArticlesContext';
import { useFetch } from './hooks/useFetch';

const App = () => {

  const {data, loading} = useFetch();

  return (
    <ArticlesContext.Provider value={{data, loading}}>
      <AppRouter/>
    </ArticlesContext.Provider>
    
  )
}

export default App