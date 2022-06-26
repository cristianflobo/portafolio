import React from 'react'
import "./style/Navbar.css"

const Navbar = () => {
  return (
    <div class="nav">
  <input type="checkbox" id="nav-check"></input>
  <div class="nav-header">
    <div class="nav-title">
      JoGeek
    </div>
  </div>
  <div class="nav-btn">
    <label for="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  
  <div class="nav-links">
    <a href="//github.io/jo_geek" target="_blank">Github</a>
    <a href="http://stackoverflow.com/users/4084003/" target="_blank">Stackoverflow</a>
    <a href="https://in.linkedin.com/in/jonesvinothjoseph" target="_blank">LinkedIn</a>
    <a href="https://www.canva.com/design/DAFCsUNy4FQ/i-tqdkbrKJXzD13-z9VGpw/view?utm_content=DAFCsUNy4FQ&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" target="_blank">Ver CV</a>
    <a href="https://jsfiddle.net/user/jo_Geek/" target="_blank">JsFiddle</a>
  </div>
</div>
  )
}

export default Navbar