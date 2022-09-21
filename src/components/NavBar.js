import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const pageLinks = links.map((link) => {
    return (
      <a key={link} href="#link">{link}</a>
    )
  })
  console.log(pageLinks)
  return <nav>{pageLinks}</nav>;
  
}

export default NavBar;
