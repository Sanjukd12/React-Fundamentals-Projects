import React, { useRef, useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  useEffect(() => {
    if (linksRef.current) {
      const linksHeight = linksRef.current.getBoundingClientRect().height;
      linksContainerRef.current.style.height = showLinks
        ? `${linksHeight}px`
        : "0px";
    }
  }, [showLinks]);

  return (
    <nav>
      <div className="nav-header">
        <img src={logo} className="logo" alt="logo" />
        <button className="nav-toggle" onClick={toggleLinks}>
          <FaBars />
        </button>
      </div>

      <div className="links-container" ref={linksContainerRef}>
        <ul className="links" ref={linksRef}>
          {links.map((link) => {
            const { id, url, text } = link;
            return (
              <li key={id}>
                <a href={url}>{text}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
