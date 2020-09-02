import React, { useState, useEffect } from 'react'
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import api from '../../services/api'
import './style.css'

export default function ProductsUpdate() {
  // const [image, setImage] = useState('')
  // const [title, setTitle] = useState('')
  // const [price, setPrice] = useState('')
  // const [description, setDescription] = useState('')

  const [resposta, setResposta] = useState({})

  const id = localStorage.getItem('ProductId')

  async function UpdateProduct() {
    try {
      const { data } = await api.get(`/${id}`)

      console.log('resposta: ', resposta)

      return setResposta(data)
    } catch (error) {
      return alert('Erro no cadastro!!')
    }
  }

  return (
    <>
      <article>
        <div className="container">
          <h2> Atualização de Produtos</h2>
          {resposta.map((dados) => (
            <div key={dados._id}>
              <form
                onSubmit={UpdateProduct}
                className="root"
                noValidate
                autoComplete="off"
              >
                <div> {dados.title}</div>
                <TextField
                  // value={price}
                  // onChange={(e) => setPrice(parseFloat(e.target.value))}
                  id="outlined-basic"
                  label="Preço"
                  variant="outlined"
                  name="price"
                  className="inputs"
                  placeholder={dados.price}
                />
                <TextField
                  // value={description}
                  // onChange={(e) => setDescription(e.target.value)}
                  id="outlined-basic"
                  label="Descrição"
                  variant="outlined"
                  name="description"
                  className="inputs"
                  placeholder={dados.description}
                />{' '}
                <Button
                  variant="contained"
                  onClick={UpdateProduct}
                  color="primary"
                  type="submit"
                >
                  Atualizar
                </Button>
              </form>
            </div>
          ))}
        </div>
      </article>
    </>
  )
}
