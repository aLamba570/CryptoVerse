import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Menu, Typography, Avatar } from "antd";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import icon from "../images/cryptocurrency.png";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/">CryptoVerse</Link>
        </Typography.Title>
      </div>

      <Menu theme="dark">
        <Menu.Item key="home" icon={<HomeOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>

        <Menu.Item key="cryptocurrencies" icon={<MoneyCollectOutlined />}>
          <Link to="/cryptocurrencies">Cryptocurrencies</Link>
        </Menu.Item>

        <Menu.Item key="exchanges" icon={<FundOutlined />}>
          <Link to="/exchanges">Exchanges</Link>
        </Menu.Item>

        <Menu.Item key="news" icon={<BulbOutlined />}>
          <Link to="/news">News</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Navbar;
