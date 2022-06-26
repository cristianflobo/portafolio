import React from 'react'
import './style/Footer.css'
import whatsapp from "../image/whatsapp.png"
import linkedin from "../image/linkedin.png"
import github from "../image/github.png"


const Footer = () => {
  return (
    <div>
        <div class="mt-5 pt-5 pb-5 footer">
    <div class="container">
      <div class="row">
        <div class="col-lg-5 col-xs-12 about-company">
          <h2>Heading</h2>
          <p class="pr-5 text-white-50">Saludos! Soy Desarrollador Web Full-Stack y Tecnologo Electrónico, Me gusta combinar las herramientas que ambos perfiles ofrecen para encontrar soluciones eficientes a los retos que se presentan en mi vida en el ámbito tecnológico. He desarrollado proyectos usando tecnologías tanto para el desarrollo web como backend. Tengo conocimientos en HTML | CSS | JavaScript | NodeJS | React | Redux | PostgreSQL | Express | Sequelize | GitHub | Git. </p>
          <p><a href="#"><i class="fa fa-facebook-square mr-1"></i></a><a href="#"><i class="fa fa-linkedin-square"></i></a></p>
        </div>
        <div class="col-lg-3 col-xs-12 links">
          <h4 class="mt-lg-0 mt-sm-3">Contacto</h4>
            <ul class="m-0 p-0">
            <p class="mb-0"><i class="fa fa-phone mr-3"></i>(+57) 3207639924</p>
          <p><i class="fa fa-envelope-o mr-3"></i>cristianflobo@hotmail.com</p>
              <a  href="https://api.whatsapp.com/send?phone=573207639924"><img style={{height:"50px",margin:"5px"}} src={whatsapp} alt="whatsapp" /></a>
              <a  href="https://www.linkedin.com/in/cristian-lobo/"><img style={{height:"50px",margin:"5px"}} src={linkedin} alt="linkedin" /></a>
              <a  href="https://github.com/cristianflobo"><img style={{height:"50px",margin:"5px"}} src={github} alt="github" /></a>
              
         
            </ul>
        </div>
        <div class="col-lg-4 col-xs-12 location">
          <h4 class="mt-lg-0 mt-sm-4">Location</h4>
          <p>Medellin, colombia</p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d85382.65197082728!2d-75.57475554636653!3d6.2415602648101505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sco!4v1656106697730!5m2!1ses!2sco"></iframe>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col copyright">
          {/* <p class=""><small class="text-white-50">© 2019. dame trabajo.</small></p> */}
        </div>
      </div>
    </div>
    </div></div>
  )
}

export default Footer