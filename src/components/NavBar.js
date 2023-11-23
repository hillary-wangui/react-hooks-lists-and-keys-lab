import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
 const LinksMenu = links.map(link => {
  return(
    <a href={link} key={link}>{link}</a>
  )
 })
  return (
  <>
  <nav>{/* display an <a> tag for each link here */}
  {LinksMenu}
  </nav>
  </>

)}

export default NavBar;