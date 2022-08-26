import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from './provider/AuthContextProvider';
import { LoaderContxtProvider } from './provider/LoaderContextProvider';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BrowserRouter>
     <AuthContextProvider>
      <LoaderContxtProvider>
       <App />
      </LoaderContxtProvider>  
     </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);


