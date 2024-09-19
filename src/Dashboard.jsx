import React from 'react'
import data from './data'

const Item = ({id, title, description, image, price})=>{
    return(
        <div className="containerDashboard">
            <img src={image}/>
            <div className="titlePrice">
                <h3>{title}</h3>
                <button>R$ {price}</button>
            </div>
            <div className="description">
                <p>{description}</p>
            </div>
            <button>Comprar</button>
        </div>
    )
}

function Dashboard() {

  return (
    <div className="container">
        <h1>Dashboard</h1>
        {data.map((item)=>{
            return <Item key={item.id}
                title={item.title} 
                image={item.image}
                price={item.price}
                description={item.description}
                        />
        })}

    </div>
  )
}

export default Dashboard