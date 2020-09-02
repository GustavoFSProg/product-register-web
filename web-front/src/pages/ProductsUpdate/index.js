import React, { useState, useEffect } from 'react'
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import api from '../../services/api'
import './style.css'

export default function ProductsUpdate() {
  // const [inputId, setInputId] = useState('')

  // const history = useHistory()
  const [resposta, setResposta] = useState({})

  async function handleLIsta() {
    const id = localStorage.getItem('ProductId')

    let { data } = await api.get(`/products/${id}`)

    console.log('Data: ', data)

    setResposta(data)

    return resposta

    console.log(typeof resposta)
  }

  // useEffect(() => {
  //   handleLIsta()
  // })

  handleLIsta()

  return (
    <article>
      <header>
        <span></span>
        <div className="user-info">
          <div className="info">
            <span>
              <strong> Título: </strong> {resposta.title}
            </span>
            <br></br>
            <br></br>
            <span>
              {' '}
              <strong> Preço: </strong> {resposta.price}
            </span>
            <br></br>
            <br></br>
            <span className="place">
              {' '}
              <strong> Descrição: </strong>
              {resposta.description}
            </span>
            <form>
              <button type="submit" onClick={(e) => handleLIsta()}>
                Editar
              </button>
            </form>
            <br></br>
          </div>
        </div>
      </header>
    </article>
  )
}
