import React from "react";
import pepaImg from "/src/assets/pepa.jpg";
import maillIcon from "/src/assets/Mail.png";
import linkedinIcon from "/src/assets/linkedin.png";

export default function Header() {
  return (
    <header className="header">
      <img src={pepaImg} alt="Retrato de Pepa" />
      <div className="header-nombre">
        <h1>Laura Smith</h1>
        <h2>Frontend Developer</h2>
        <a className="web-link" href="#">
          laurasmith.website
        </a>
      </div>
      <div className="btn-group">
        <button className="btn-name">
          <img src={maillIcon} alt="" />
          <p>Email</p>
        </button>
        <button className="btn-lknd">
          <img src={linkedinIcon} alt="" />
          <p>Linkedln</p>
        </button>
      </div>
    </header>
  );
}
