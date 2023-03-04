// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Table from "./components/login";
import Signupuser from './components/signup_user';
import Loginmechanic from './components/login_mechanic';
import Logindriver from './components/login_driver';
import Passwordreset from './components/password_reset';
import Registermechanic from './components/register_mechanic';
import Registerdriver from './components/register_driver';


import { BrowserRouter, Routes, Route } from "react-router-dom";






export default function Index() {
  
  return (
    <BrowserRouter>
      
      <Routes>
          
          <Route path="/" element={<Table />} />
          <Route path="/signupuser" element={<Signupuser />} />
          <Route path="/loginmechanic" element={<Loginmechanic />} />
          <Route path="/logindriver" element={<Logindriver />} />
          <Route path="/passwordreset" element={<Passwordreset />} />
          <Route path="/registermechanic" element={<Registermechanic />} />
          <Route path="/registerdriver" element={<Registerdriver />} />
          
          
          
          
          
          
          

          
   
          
          
          
      </Routes>
      
    </BrowserRouter>
      
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index />);
