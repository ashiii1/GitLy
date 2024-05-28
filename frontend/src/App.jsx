import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage';
import ExplorePage from './pages/ExplorePage';
import LikesPage from './pages/LikesPage';
import Sidebar from './components/Sidebar';
import { AuthProvider } from './AuthContext';
import ProtectedRoute from './ProtectedRoute'
function App() {
  return (
    <AuthProvider>
      <div className="flex">
        <Sidebar />
        <div className='max-w-5xl my-5 text-white mx-auto transition-all duration-300 flex-1'>
          <Routes>
            <Route path='/signup' element={<SignUpPage />} />
            <Route
              path='/'
              element={
                <ProtectedRoute>
                  <HomePage />
                </ProtectedRoute>
              }
            />
            <Route
              path='/explore'
              element={
                <ProtectedRoute>
                  <ExplorePage />
                </ProtectedRoute>
              }
            />
            <Route
              path='/likes'
              element={
                <ProtectedRoute>
                  <LikesPage />
                </ProtectedRoute>
              }
            />
          </Routes>
          <Toaster />
        </div>
      </div>
    </AuthProvider>
  );
}
export default App;
