import React from 'react';



function Navbar() {
  
    return (
        <>
    <div className="navMenu">
      <h1 className='navHead'>MJ</h1>
      <ul id="menuItems">
        <li className="listItems"><a href="#home">Home</a></li>
        <li className="listItems"><a href="#contact">Contact</a></li>
        <li className="listItems" id="drop"><a href="#about">About Us</a><br  />
          <ul id="dropDown">
            <li>About Me</li>
            <li>About Us</li>
          </ul>
        </li>
        <li className="listItems"><a href="//">Services</a></li>
        <li className="listItems"><a href="//">Portfolio</a></li>
      </ul>
      <div onClick={touchShow} className="menuIcon">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </div>
        </>
    )
}
const menuList = document.getElementById("menuItems");
  const touchShow = ()=>{
    if(menuList.style.display === "block") { // if is menuBox displayed, hide it
      menuList.style.display = "none";
      menuList.classList.add("add");
    }
    else { // if is menuBox hidden, display it
      menuList.style.display = "block";
      menuList.classList.remove("add");
    }
  }

export default Navbar;