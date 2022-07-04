import React from 'react'
import image from "../image/imagen.jpg"
import js from "../image/js.png"
import node from "../image/node.png"
import express from "../image/express.png"
import react from "../image/react.png"
import redux from "../image/redux.png"
import boostrap from "../image/boostrap.png"
import postgres from "../image/postgres.png"
import css3 from "../image/css3.png"
import html5 from "../image/html5.png"
import git from "../image/git.png"
import native from "../image/native.png"
import figma from "../image/figma.webp"
import heroku from "../image/heroku.png"
import "./style/Home.css"
import Study from './Study'
import Proyect from './Proyect'

const Home = () => {
  return (
    <div class="container">
        <div class="row mb-3">
          <div style={{marginTop:"100px"}} class="col-6">
            {/* <img style={{width:"700px",position:"absolute"}} src={fullstack} ></img> */}
            <h1 style={{fontFamily:"MozAnimation",fontWeight: "bolder",fontSize:"65px"}}>Hola,</h1>
            <h2 style={{fontFamily:"MozAnimation", color:"orange",fontWeight: "bolder",fontSize:"50px"}}>Soy Cristian Lobo</h2>
            <h4 style={{fontFamily:"MozAnimation", color:"orange",fontWeight: "bolder",fontSize:"35px"}}>Nececitas un desarrollador Fullstack?</h4>
            <h4 style={{fontFamily:"MozAnimation", color:"black",fontWeight: "bolder",fontSize:"35px"}}>Te invito a revisar todo mi portafolio </h4>
          </div>
          <div class="col-6"> 
            <img style={{width:"700px"}} src={image}></img>
          </div>
        </div>
        <div style={{marginTop:"60px"}}></div>
      <div class="row mb-3" id="tecno">
      <div class="col-12 tecno12"> 
          <h1 className='tecno' >Tecnologias</h1>
      </div>
      <div class="col-4 tecno12"><h1 className='front' >FrontEnd</h1> 
      <div style={{textAlign:"center"}} >
            <img className="hover"  style={{width:"80px",margin:"10px",borderRadius:"10px"}} src={js}></img>
            <img className="hover"  style={{width:"80px",margin:"10px"}} src={css3}></img>
            <img className="hover"  style={{width:"80px",margin:"10px"}} src={html5}></img>
            <img className="hover"  style={{width:"80px",margin:"10px"}} src={react}></img>
            <img className="hover"  style={{width:"100px",margin:"10px"}} src={redux}></img>
          </div>
      </div>
        <div class="col-4 tecno13"> 
          <h1 className='front' >Otros</h1>
          <div style={{textAlign:"center"}} >
            <img className="hover" style={{width:"80px",margin:"10px",borderRadius:"10px"}} src={git}></img>
            <img className="hover" style={{width:"80px",margin:"10px",borderRadius:"10px"}} src={figma}></img>
            <img className="hover" style={{width:"80px",margin:"10px",borderRadius:"10px"}} src={heroku}></img> 
          </div>
          <h1 className='back' >En Curso</h1>
          <div style={{textAlign:"center"}}>
            <img className="hover" style={{width:"80px", height:"80px",margin:"10px",borderRadius:"10px"}} src={native}></img>
            
          </div>
        </div>
        <div class="col-4 tecno12"> 
        <h1 className='back' >BackEnd</h1>
          <div style={{textAlign:"center"}}>
            <img className="hover" style={{width:"80px",margin:"10px",borderRadius:"10px"}} src={postgres}></img>
            <img className="hover" style={{width:"120px",margin:"10px"}} src={express}></img>
            <img className="hover" style={{width:"80px",margin:"10px",borderRadius:"10px"}} src={boostrap}></img>
            <img className="hover" style={{width:"80px",margin:"10px"}} src={node}></img>
            
          </div>
        </div>
      </div>
      <div style={{marginTop:"60px"}}></div>
      <Study/>
      <div style={{marginTop:"60px"}}></div>
      <Proyect/>
    </div>
  )
}

export default Home