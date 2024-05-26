import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import ExplorePage from './pages/ExplorePage';
import LikesPage from './pages/LikesPage';

import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className='max-w-5xl my-5 text-white mx-auto transition-all duration-300 flex-1'>
        <Routes>
          {/* Route for the home page */}
          <Route path='/' element={<HomePage />} />
          {/* Route for login */}
          <Route path='/login' element={<LoginPage />} />
          {/* Route for signup */}
          <Route path='/signup' element={<SignUpPage />} />
          {/* Route for explore */}
          <Route path='/explore' element={<ExplorePage />} />
          {/* Route for likes */}
          <Route path='/likes' element={<LikesPage />} />
        </Routes>
        <Toaster />
      </div>
    </div>
  );
}

export default App;
