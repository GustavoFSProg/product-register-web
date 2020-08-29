import React, { useState, useEffect } from 'react'
import api from '../../services/api'
import './style.css'

function Lista() {
  const [resposta, setResposta] = useState([])

  async function handleLIsta() {
    let { data } = await api.get('/')

    return setResposta(data)
  }

  useEffect(() => {
    handleLIsta()
  }, [])

  return (
    <article>
      {resposta.map((resp) => (
        <header>
          <span key={resp._id}></span>
          <div className="user-info">
            <img
              width="20%"
              src={`http://localhost:3001/files/${resp.image}`}
              alt="imagem"
            />
            <div className="info">
              <span>
                <strong> Título: </strong> {resp.title}
              </span>
              <br></br>
              <br></br>
              <span>
                {' '}
                <strong> Preço: </strong> {resp.price}
              </span>
              <br></br>
              <br></br>
              <span className="place">
                {' '}
                <strong> Descrição: </strong>
                {resp.description}
              </span>
              <br></br>
            </div>
          </div>
        </header>
      ))}
    </article>
  )
}

export default Lista
