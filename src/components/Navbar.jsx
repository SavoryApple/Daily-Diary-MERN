import React from 'react'
import './css/intro.modules.css';

const Navbar = () => {
  return (
    <nav>
      <a href="/">Home</a>
      <a href="/calendar">Calendar</a>
      <a href="/create/march/31">Create</a>
      <a href="/contact">Contact</a>
      <div className="animation start-home"></div>
    </nav>
  )
}

export default Navbar;