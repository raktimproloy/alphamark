import React from 'react';
import "./style.css";

export default function index() {
  return (
    <div className="header_container hidden lg:block">
      <div className="main_container">
        <div className="logo_container flex flex-col md:flex-row justify-between items-start md:items-start">
          <div className="text-center">
            <h6>Alphamark™</h6>
            <h6>©2024 All rights reserved</h6>
          </div>
          <div className="text-center mt-4 md:mt-0">
            <h6>Skopje ▪ North Macedonia</h6>
            <h6>41° 59&apos; 47.26&quot; N / 21° 25&apos; 53.08&quot; E</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
