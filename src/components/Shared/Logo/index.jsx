import React from 'react';
import "./style.css";

export default function index() {
  return (
    <div className="header_container hidden lg:block">
      <div className="main_container">
        <div className="logo_container flex flex-col md:flex-row justify-between items-start md:items-start">
          <div className="text-center">
            <p>Alphamark™</p>
            <p>©2024 All rights reserved</p>
          </div>
          <div className="text-center mt-4 md:mt-0">
            <p>Skopje ▪ North Macedonia</p>
            <p>41° 59&apos; 47.26&quot; N / 21° 25&apos; 53.08&quot; E</p>
          </div>
        </div>
      </div>
    </div>
  );
}
