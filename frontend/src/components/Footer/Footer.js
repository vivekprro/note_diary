import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        width: "80%",
        margin: "auto",
        padding: "20px",
        position: "relative",
        bottom: 0,
        display: "flex",
        justifyContent: "center",
        border: "1px solid #212121",
        borderRadius: "8px",
        boxSizing: "border-box",
      }}
    >
      <p className="text-center py-3">Copyright &copy; Note Zipper</p>
    </footer>
  );
};

export default Footer;
