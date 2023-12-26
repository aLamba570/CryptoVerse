import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
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
            <Content style={{ marginLeft: '270px' }}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/exchanges" element={<Exchanges />} />
                <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
                <Route path="/crypto/:coinId" element={<CryptoDetails />} />
                <Route path="/news" element={<News />} />
              </Routes>
            </Content>
            </div>
          </Layout>
        </div>

        <div className='footer'>
        <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright © 2021
          <Link to="/">
            Cryptoverse Inc.
          </Link> <br />
          All Rights Reserved.
        </Typography.Title>
          <Space>
          <Link to="/">Home</Link>
          <Link to="/exchanges">Exchanges</Link>
          <Link to="/news">News</Link>
        </Space>
        </div>
        
      </Layout>
    </Router>
  );
};

export default App;
