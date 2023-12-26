import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout } from 'antd';
import './App.css';
import Navbar from './components/Navbar';
import Exchanges from './components/Exchanges';
import Cryptocurrencies from './components/Cryptocurrencies';
import CryptoDetails from './components/CryptoDetails';
import News from './components/News';
import HomePage from './components/HomePage';

const { Content } = Layout;

const App = () => {
  return (
    <Router>
      <Layout>
        <div className="navbar">
          <Navbar />
        </div>

        <div className='main'>
          <Layout>
            <div className='routes'>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/exchanges" element={<Exchanges />} />
                <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
                <Route path="/crypto/:coinId" element={<CryptoDetails />} />
                <Route path="/news" element={<News />} />
              </Routes>
            </div>
          </Layout>
        </div>

        <div className='footer'>
          {/* Footer content */}
        </div>
        
      </Layout>
    </Router>
  );
};

export default App;
