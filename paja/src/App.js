import React, {  } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar.js'
import Home from './pages/home.js';
import Footer from './components/footer.js';

function App() {
  return (
    <div className="App">
          <Navbar />
          <main className="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    
                </Routes>
            </main>
            <Footer />
    </div>

  );
}

export default App;
