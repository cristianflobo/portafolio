import React from 'react'
import "./style/Navbar.css"

const Navbar = () => {
  return (
    <div class="nav" style={{backgroundColor:"rgb(252, 238, 233)"}}>
  <input type="checkbox" id="nav-check"></input>
  <div class="nav-header">
    <div class="nav-title">
      Portafolio
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
    <a href="https://github.com/cristianflobo/cristianflobo" target="_blank">Github</a>
    <a href="https://www.linkedin.com/in/cristian-lobo/" target="_blank">LinkedIn</a>
    <a href="https://www.canva.com/design/DAFCsUNy4FQ/i-tqdkbrKJXzD13-z9VGpw/view?utm_content=DAFCsUNy4FQ&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" target="_blank">Ver CV</a>
    <a href="#estudio" >Estudios y Experiencia</a>
    <a href="#tecno" >Tecnologias</a>
    <a href="#salto" >Contacto</a>
  </div>
</div>
  )
}

export default Navbar