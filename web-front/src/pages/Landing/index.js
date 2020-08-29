import React, { useState } from 'react'
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import api from '../../services/api'
import './style.css'

export default function Landing() {
  const [image, setImage] = useState('')
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')

  async function Register(e) {
    e.preventDefault()

    const data = new FormData()

    data.append('image', image)
    data.append('title', title)
    data.append('description', description)
    data.append('price', price)

    try {
      await api.post('/post', data)

      alert('Cadastro efetuado com sucesso!')
    } catch (error) {
      alert('Erro no cadastro!!')
    }
  }

  return (
    <div className="container">
      <h2> Cadastro de Produtos</h2>

      <form onSubmit={Register} className="root" noValidate autoComplete="off">
        <TextField
          onChange={(e) => setImage(e.target.files[0])}
          type="file"
          placeholder="Imagem"
          name="image"
          className="inputs"
        />

        <TextField
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          id="outlined-basic"
          label="Titulo"
          name="title"
          variant="outlined"
          className="inputs"
        />
        <TextField
          value={price}
          onChange={(e) => setPrice(parseFloat(e.target.value))}
          id="outlined-basic"
          label="Preço"
          variant="outlined"
          name="price"
          className="inputs"
        />
        <TextField
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          id="outlined-basic"
          label="Descrição"
          variant="outlined"
          name="description"
          className="inputs"
        />

        <Button variant="contained" color="primary" type="submit">
          Cadastrar
        </Button>
      </form>
    </div>
  )
}
