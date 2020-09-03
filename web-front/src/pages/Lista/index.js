import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import api from '../../services/api'
import './style.css'

function Lista() {
  const [resposta, setResposta] = useState([])
  const [inputId, setInputId] = useState('')

  const history = useHistory()

  async function handleLIsta() {
    let { data } = await api.get('/')

    return setResposta(data)
  }

  useEffect(() => {
    handleLIsta()
  }, [])

  function handleForm(id) {
    localStorage.setItem('ProductId', id)

    // alert('id: ' + id)

    history.push('/productsUpdate')
  }

  return (
    <article>
      {resposta.map((resp) => (
        <header>
          <span key={resp._id}></span>
          <div className="user-info">
            <img
              width="20%"
              src={`https://products-register-api.herokuapp.com/files/${resp.image}`}
              alt="imagem"
            />
            <div className="info">
              <div className="global">
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
              </div>
              <form>
                <button type="submit" onClick={(e) => handleForm(resp._id)}>
                  Editar
                </button>
              </form>
            </div>
          </div>
        </header>
      ))}
    </article>
  )
}

export default Lista
