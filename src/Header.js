import React from "react";

const Header = function() {
  const headerStyle = {
    textAlign: "center",
    padding: 20,
    background: "#000",
    color: "#fff",
    textTransform: "uppercase"
  };
  return (
    <div className="header" style={headerStyle}>
      Phone Directory
    </div>
  );
};

export default Header;
