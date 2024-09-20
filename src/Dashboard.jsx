import React, { useState } from 'react'
import data from './data'
import './Dashboard.css'

const Item = ({title, description, image, price})=>{
    
    return(
        <div className="containerItem">
            {price < 500 ?
                <div className='saldao'>
                    <h4>Saldão</h4>
                </div> : null
            }
            <div className="conteudo">
                <div className="imagem">
                    <img src={image} alt={title}/>
                </div>
                <div className="titlePrice">
                    <h3>{title}</h3>
                    <button className='btnPrice'>R$ {price}</button>
                </div>
                <div className="description">
                    <p>{description}</p>
                </div>
            </div>
            <button className='btnComprar'>Comprar</button>
        </div>
    )
}

function Dashboard() {

  return (
    <div className="container">
        <header>
            <h1>Produtos Borges</h1>
        </header>
        <main>

        {data.map((item)=>{
            return <Item key={item.id}
            title={item.title} 
            image={item.image}
            price={item.price}
            description={item.description}
            />
        })}
        </main>

    </div>
  )
}

export default Dashboard