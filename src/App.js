import React from "react";
import { MainRoutes } from "./Routes";
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <MainRoutes/>
    </BrowserRouter>
  );
};

export default App;