import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import HomePage from './pages/HomePage';
import ExplorePage from './pages/ExplorePage';
import LikesPage from './pages/LikesPage';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar className="w-64 bg-gray-800 text-white h-full fixed" />

      {/* Main content */}
      <div className="flex-1 ml-12 p-4 overflow-auto">
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/explore' element={<ExplorePage />} />
          <Route path='/likes' element={<LikesPage />} />
        </Routes>
        <Toaster />
      </div>
    </div>
  );
}

export default App;
