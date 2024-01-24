import Contato from '../../components/Contato'
import { Container, ListaContatos } from './styles'
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
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  const filtraContatos = () => {
    return items.filter(
      (item) => item.titulo.toLocaleLowerCase().search(termo.toLowerCase()) >= 0
    )
  }

  return (
    <Container>
      <p>
        2 contados marcados como: &quot;Trabalho&ldquo; e &quot;{termo}&ldquo;
      </p>
      <ListaContatos>
        {filtraContatos().map((t) => (
          <li key={t.titulo}>
            <Contato
              id={t.id}
              descricao={t.descricao}
              titulo={t.titulo}
              tag={t.tag}
            />
          </li>
        ))}
      </ListaContatos>
    </Container>
  )
}

export default ListaDeTarefas
