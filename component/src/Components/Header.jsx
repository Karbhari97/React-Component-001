import React from "react";

function Header() {
  return (
    <div style={{ margin: "20px",borderBottom:"3px solid grey" ,padding:"10px"}}>
      <h2>Karbhari Gadekar</h2>
      <h4>System Engineer At Infosys</h4>
      <a
        style={{ textDecoration: "none", color: "blue" }}
        href="https://www.linkedin.com/in/karbhari-gadekar-85001221a/"
      >
        LinkdIn
      </a>{" "}
      &nbsp;&nbsp;&nbsp;&nbsp;
      <a
        style={{ textDecoration: "none", color: "blue", }}
        href="https://github.com/"
      >
        Github
      </a>
    </div>
  );
}

export default Header;
