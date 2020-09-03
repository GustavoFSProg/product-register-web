import React, { useState, useEffect } from 'react'
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import api from '../../services/api'
import './styleEdit.css'

export default function ProductsUpdate() {
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')

  const [resposta, setResposta] = useState({})

  async function handleLIsta() {
    const id = localStorage.getItem('ProductId')

    let { data } = await api.get(`/products/${id}`)

    console.log('Data: ', data)

    setResposta(data)

    return resposta

    console.log(typeof resposta)
  }

  async function handleUpdate(req, res) {
    const idProduct = localStorage.getItem('ProductId')

    const dados = { title, price, description }

    try {
      await api.put(`/products/update/${idProduct}`, dados)

      return res.send('Produto atualizado com sucesso!')
    } catch (error) {
      return res.send(error, {
        msg: 'Produto não atualizado',
      })
    }
  }

  // useEffect(() => {
  //   handleLIsta()
  // })

  handleLIsta()

  return (
    <article>
      <header>
        <div className="user-info">
          <h1>Editar o Produto:</h1>
          <br></br>
          <div className="info">
            <form>
              <strong> Titulo: </strong>
              <div className="espaco"></div>
              <input
                placeholder={resposta.title}
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
              <span></span>
              <br></br>
              <span>
                <strong> Preço: </strong>
                <div className="espaco"></div>

                <input
                  onChange={(e) => setPrice(e.target.value)}
                  value={price}
                  placeholder={resposta.price}
                />
              </span>
              <br></br>
              <br></br>
              <strong> Descrição: </strong>
              <div className="espaco"></div>
              <input
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                placeholder={resposta.description}
              />
              <br></br> <br></br>
              <div className="aroundButton">
                <button
                  type="submit"
                  className="edit-button"
                  onClick={(e) => handleUpdate()}
                >
                  <span>Editar</span>
                </button>
              </div>
            </form>
            <br></br>
          </div>
        </div>
      </header>
    </article>
  )
}
