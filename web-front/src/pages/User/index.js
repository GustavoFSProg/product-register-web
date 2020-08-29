import React, { useState } from 'react'
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import api from '../../services/api'
import './style.css'

export default function Landing() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function Register(e) {
    e.preventDefault()

    try {
      const data = { name, email, password }

      console.log(data)

      await api.post('/users', data)

      alert('Cadastro efetuado com sucesso!')
      // history.push('/')
    } catch (error) {
      alert('Erro no cadastro!!')
    }
  }

  return (
    <div className="container">
      <form onSubmit={Register} className="root" noValidate autoComplete="off">
        <TextField
          value={name}
          onChange={(e) => setName(e.target.value)}
          id="outlined-basic"
          label="Titulo"
          name="title"
          variant="outlined"
        />
        <TextField
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="outlined-basic"
          label="Preço"
          variant="outlined"
          name="price"
        />
        <TextField
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="outlined-basic"
          label="Descrição"
          variant="outlined"
          name="description"
        />

        <Button variant="contained" color="primary" type="submit">
          Cadastrar
        </Button>
      </form>
    </div>
  )
}
