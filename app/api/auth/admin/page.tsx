"use client";
import { useState } from "react";
import axios from "axios";

import "../css/login-form.css";

const getProtectedData = async () => {
    try {
      const response = await axios.get(
        '/api/auth/checktoken', // 保護されたエンドポイント
        { withCredentials: true } // クッキーを送信
      );
      console.log(response.data.data.message); // 保護されたデータ
      if (response.data.data.message === "loginSuccess"){
        if (window.location.pathname === "/login") {
          window.location.href = "/";
        } else if (window.location.pathname === "/signup") {
          window.location.href = "/";
        } else {
          console.log('error', response);
        }
      }
    } catch (error) {
      console.error("だめだね");
    }
  };
  

export default function Home() {

  return (
    <div className="container">
      <div className="topbar">
        <div className="logo">
          <h2>美術</h2>
        </div>
        <div className="menu">
          <a href="./">
            <span>MEMBER</span>
          </a>
          <a href="./">
            <span>NEWS</span>
          </a>
          <a href="./">
            <span>ABOUT</span>
          </a>
          <a href="./login">
            <span>ADMIN</span>
          </a>
        </div>
      </div>
      <div className="login-form-container">
        <div className="login-form">
          <h2>ログイン</h2>
          <p>ユーザー名</p>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
          <p>パスワード</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <div className="show-button"></div>
          <button className="login-button" onClick={handleClick}>
            <span>ログイン</span>
          </button>
        </div>
      </div>
    </div>
  );
}