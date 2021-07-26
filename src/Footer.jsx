import React from "react";

function Footer() {
  const style = {
    position: 'fixed',
    left: 0,
    bottom: 0,
  };
  return (
    <>
      <footer style={style} className="w-100 bg-light text-center">
        <p> © 2021 Abc. All Rights Reserved | Terms and Conditions Apply</p>
      </footer>
    </>
  );
}

export default Footer;
