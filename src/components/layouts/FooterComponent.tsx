import React from "react";

const FooterComponent = () => {
  return (
    <footer className="bottom-0 py-16 text-center">
      <a
        href="https://bigpod.si"
        target="_blank"
        className="cursor-newtab font-semibold hover:underline"
        rel="noreferrer"
      >
        {new Date().getFullYear()} | Primož Ajdišek
      </a>
    </footer>
  );
};

export default FooterComponent;
