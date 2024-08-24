import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import HomePage from './pages/HomePage';
import ExplorePage from './pages/ExplorePage';
import LikesPage from './pages/LikesPage';
import Sidebar from './components/Sidebar';
function App() {
  return (
      <div className="flex">
       
          <Routes>
            <Route
              path='/'
              element={
                  <HomePage />
              }
            />
            <Route
              path='/explore'
              element={
                  <ExplorePage />
              }
            />
            <Route
              path='/likes'
              element={
                  <LikesPage />
              }
            />
          </Routes>
          <Toaster />
        </div>
    
  );
}
export default App;
