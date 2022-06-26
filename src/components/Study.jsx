import React from 'react'
import "./style/Study.css"
import henry from "../image/henry.webp"
import wicalling from "../image/wicalling.png"
import juan from "../image/juan.jpg"
import pascual from "../image/pascual.png"


const Study = () => {
  return (
    <div class="container" id="estudio">
      <div class="row mb-3">
        <div class="col-6 expe"><h1 className='frontExp' >Estudios</h1></div>
        <div class="col-6 expe"> <h1 className='frontExp' >Experiencia</h1></div>
      </div>
      <div style={{marginTop:"20px"}} ></div>
      <div class="row mb-3">
        <div class="col-6 row">
          <div class="col-2 " style={{borderRight:"1px solid"}}>
            <p>2010-2013</p>
          </div>
          <div class="col-9 " style={{marginBottom:"20px"}} >
          <h5>Universidad Pascual Bravo <a href="https://pascualbravo.edu.co/" target="_blank"><img style={{width:"80px"}} src={pascual} alt=""  /></a></h5>
            <h6>Tecnólogo electrónico</h6>
            <li>Diseño e implementación de circuitos electrónicos</li>
            <li>Programación de microcontroladores (lenguaje c)</li>
          </div>
          <div class="col-2 " style={{borderRight:"1px solid"}}>
            <p>2021-2022</p>
          </div>
          <div class="col-9 " >
          <h5>Henry <a href="https://www.soyhenry.com/" target="_blank"><img style={{width:"110px"}} src={henry} alt=""  /></a></h5>
            <h6>Bootcamp Desarrollador Full-Stack</h6>
            <p> | Javascript | React | Redux | HTML | CSS | NodeJS | Express | PostgreSQL | Sequelize |</p>
          </div>
        </div>
        <div class="col-6 row">
          <div class="col-2 " style={{borderRight:"1px solid"}}>
            <p>2017-2021</p>
          </div>
          <div class="col-9 " style={{marginBottom:"10px"}} >
          <h5>Wicalling <a href="https://wi-calling.com/" target="_blank"><img style={{width:"80px"}} src={wicalling} alt="" /></a></h5>
            <h6>Outsourcing</h6>
            <li>Programación de microcontroladores(pic-arduino)</li>
            <li>Diseño de sistemas basados en microcontroladores</li>
          </div>
          <div class="col-2 " style={{borderRight:"1px solid"}}>
            <p>2019-actual</p>
          </div>
          <div class="col-9 " >
          <h5>Juan Valdez Cafe <a href="https://www.tiendajuanvaldez.com/" target="_blank"><img style={{width:"40px"}} src={juan} alt="" /></a></h5>
            <h6>Técnico Mantenimiento </h6>
            <li>Reparación y mantenimiento de equipos</li>
          </div>
        </div>
      </div>
    </div>
  )
}

//font-family: Helvetica, Arial, sans-serif;
export default Study