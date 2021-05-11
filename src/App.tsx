import React from 'react';
import './App.css';
import logo from './images/logo@2x.png';
import bg from './images/bg@2x.png';

function App() {
  return (
    <div className="App">
      <img src={logo} className="header" />
      <div className="content">
        <p className="row">
          <span className="label">应用名称：</span>
          洪九星桥物流
        </p>
        <p className="row">
          <span className="label">应用介绍：</span>
          专业水果运输物流系统，提供订单、商品、物流等相关信息的追溯与操作服务。洪九星桥物流基于广泛的行业基础与全国各地如贵阳、成都、青岛、拉萨等城市在内的水果基地建设经验，为水果产业整合、渠道拓展、品牌运作、物流布局提供有力的支持，推动全球优质水果基地的合作与优质水果资源的整合。
        </p>
      </div>
      <div className="footer">
        <p className="footer-text">地址：重庆市渝北区东湖南路3号中铁峰汇B座22楼</p>
        <p className="footer-text">电话：0086-023-67064616</p>
        <p className="footer-text">邮箱：hjtz_apple@hjfruit.com</p>
      </div>
      <img src={bg} className="bg" />
    </div>
  );
}

export default App;
