import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import CreateStudent from './Components/CreateStudent';
import Student from './Components/Student';
import UpdateStudent from './Components/UpdateStudent';


import './App.css';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Student />} />
          <Route path="/create" element={<CreateStudent />} />
          <Route path="/update/:id" element={<UpdateStudent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
