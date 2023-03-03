import React from "react";
import GlobalStyle from "./styles/global";
import { MainRoutes } from "./Routes";
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  );
};

export default App;