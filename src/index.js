import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MainMenu } from './Components/MainMenu';
import { ContentArea } from './Components/ContentArea';

import { Home } from './Home';
import { Music } from './Music';
import { Software } from './Software';
import { Contact } from './Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <MainMenu />
    <ContentArea>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Music" element={<Music /> } />
        <Route path="/Software" element={<Software /> } />
        <Route path="/Contact" element={<Contact /> } />
      </Routes>
    </ContentArea>
  </Router>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
