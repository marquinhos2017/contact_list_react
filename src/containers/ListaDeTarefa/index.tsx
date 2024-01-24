import Contato from '../../components/Contato'
import { Container, ListaContatos, Resultado } from './styles'
import * as enums from '../../utils/enums/Contato'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
const contatos = [
  {
    titulo: 'Marcos Rodrigues',
    descricao: ' marcos.rodrigues2015@yahoo.com.br',
    tag: enums.Tag.HOME
  },
  {
    titulo: 'Janaia de Costa',
    descricao: 'janainacosta23@gogle.com.br',
    tag: enums.Tag.CHURCH
  },
  {
    titulo: 'Georgia Kubic',
    descricao: 'georgiakubic232@yahoo.com.br',
    tag: enums.Tag.WORK
  }
]

const ListaDeTarefas = () => {
  const { items } = useSelector((state: RootReducer) => state.contatos)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtraContatos = () => {
    let contatosFiltrados = items
    if (termo !== undefined) {
      contatosFiltrados = contatosFiltrados.filter(
        (item) =>
          item.titulo.toLocaleLowerCase().search(termo.toLowerCase()) >= 0
      )
      if (criterio === 'tag') {
        contatosFiltrados = contatosFiltrados.filter(
          (item) => item.tag === valor
        )
      }

      return contatosFiltrados
    } else {
      return items
    }
  }

  const contatos = filtraContatos()

  const exibeResultadoFiltrado = (quantidade: number) => {
    let mensagem = ''
    const complementacao =
      termo !== undefined && termo.length > 0 ? ` e "${termo}"` : ''

    if (criterio === 'todas') {
      mensagem = `${quantidade} contatos encontrada(s) como: todas ${complementacao} `
    } else {
      mensagem = `${quantidade} contatos encontrada(s) como: "${`${criterio}=${valor}`}" ${complementacao}"`
    }

    return mensagem
  }

  const mensagem = exibeResultadoFiltrado(contatos.length)

  return (
    <Container>
      <Resultado>{mensagem}</Resultado>
      <ListaContatos>
        {contatos.map((t) => (
          <li key={t.titulo}>
            <Contato
              id={t.id}
              descricao={t.descricao}
              titulo={t.titulo}
              tag={t.tag}
              descricao2={t.descricao2}
            />
          </li>
        ))}
      </ListaContatos>
    </Container>
  )
}

export default ListaDeTarefas
