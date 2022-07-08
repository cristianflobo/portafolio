import React from 'react'
import countries from "../image/countries.png"

const Proyect = () => {
  return (
    <div>
        <div class="row mb-3 tecno12">   
            <div class="col-12 " > 
                <h1 className='tecno' >Proyectos</h1>
            </div>
            <div className='row col-6 '>   
                <a href="https://bluebirdstore.vercel.app/">Bluebirdstore</a>
                <p >Se utilizaron tecnologías como: JS, React , Redux, Node js, Express, Sequelize, Postgres, auth0</p>
                 <p > Se esta construyendo una pagina web para permitir la comercialización de productos con pasarela de pagos </p>
                {/* <img style={{width:"auto",height:"250px"}}src={bluebird} alt="" /> */}
                <iframe style={{marginBottom:"15px"}} width="560" height="315" src="https://www.youtube.com/embed/zTvZTOTI9zY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className='row col-6 '>   
                <a href="https://intense-plateau-97412.herokuapp.com/home">Countries Tour</a>
                <p >Se utilizaron tecnologías como: JS, React , Redux, Node js, Express, Sequelize, Postgres</p>
                 <p > Se esta construyendo una pagina web para ver infomacion de paises y poder crear tour </p>
                <iframe style={{marginBottom:"9px"}} width="560" height="315" src="https://www.youtube.com/embed/7O0rIA-qhSc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
      </div>
      
    </div>
  )
}

export default Proyect