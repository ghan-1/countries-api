import React from "react";
import logo from "../logos/logo.png";

function NavBar() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <img
        src={logo}
        alt="Logo Image"
        style={{ height: "60px", marginTop: "10px" }}
      ></img>
      <div>
        <p
          style={{
            fontWeight: "300",
            fontSize: "38px",
            margin: "0px 0px 0px 0px",
            marginTop: "15px",
            lineHeight: "120%",
            fontFamily: "'Open sans', sans-serif",
          }}
        >
          Welcome to countries API
        </p>
      </div>
    </div>
  );
}

export default NavBar;
