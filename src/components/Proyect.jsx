import React from 'react'
import bluebird from "../image/bluebird.png"

const Proyect = () => {
  return (
    <div>
        <div class="row mb-3">   
            <div class="col-12 tecno12" > 
                <h1 className='tecno' >Proyectos</h1>
            </div>
            <div className='row col-5'>
              
                <a href="https://bluebirdstore.vercel.app/">Bluebirdstore</a>
                <p >Se utilizaron tecnologías como: JS, React , Redux, Node js, Express, Sequelize, Postgres, auth0</p>
                 <p > Se esta construyendo una pagina web para permitir la comercialización de productos con pasarela de pagos </p>
                <img style={{width:"auto",height:"250px"}}src={bluebird} alt="" />
            </div>
      </div>
    </div>
  )
}

export default Proyect