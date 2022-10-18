import { useState } from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { NavBar } from "./components";
import { Home } from "./containers";
import "./App.scss";
import "./containers/Home/Home.scss";

const queryClient = new QueryClient();

function App() {
  // yet to add react router
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <main className='app'>
          <NavBar />
        </main>
        <Routes>
          <Route index path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
    </QueryClientProvider>
  );
}

export default App;
