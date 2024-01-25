import { FormEvent, useState } from 'react'
import { BotaoSalvar, MainContainer, Titulo } from '../../styles'
import { Campo } from '../../styles'
import { Form, Opcoes, Opcao } from './styles'
import { useDispatch } from 'react-redux'
import * as enums from '../../utils/enums/Contato'
import Contact from '../../models/Contact'
import { Descricao2 } from '../../components/Contato/styles'
import { cadastrar } from '../../store/reducers/contato'
import { useNavigate } from 'react-router-dom'
const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [descricao2, setDescricao2] = useState('')
  const [tag, setTag] = useState(enums.Tag.WORK)

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()
    const contatoParaAdicionar = new Contact(
      titulo,
      tag,
      descricao,
      descricao2,
      9
    )

    dispatch(cadastrar(contatoParaAdicionar))
    navigate('/')
  }

  return (
    <MainContainer>
      <Titulo>Nova Tarefa</Titulo>
      <Form onSubmit={cadastrarContato}>
        <Campo
          value={titulo}
          onChange={(evento) => setTitulo(evento.target.value)}
          type="text"
          placeholder="Titulo"
        />
        <Campo
          value={descricao}
          onChange={(evento) => setDescricao(evento.target.value)}
          as="textarea"
          placeholder="Email"
        />
        <Campo
          value={descricao2}
          onChange={(evento) => setDescricao2(evento.target.value)}
          as="textarea"
          placeholder="Contact"
        />
        <Opcoes>
          <p>Categorias</p>
          {Object.values(enums.Tag).map((tag) => (
            <Opcao key={tag}>
              <input
                value={tag}
                name="tag"
                type="radio"
                id={tag}
                onChange={(evento) => setTag(evento.target.value as enums.Tag)}
                defaultChecked={tag === enums.Tag.WORK}
              />{' '}
              <label htmlFor={tag}>{tag}</label>
            </Opcao>
          ))}
        </Opcoes>
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </Form>
    </MainContainer>
  )
}
export default Formulario
