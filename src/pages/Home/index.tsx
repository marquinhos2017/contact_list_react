import BotaoAdicionar from '../../components/BotaoAdicionar'
import BarraLateral from '../../containers/BarraLateral'
import ListaDeTarefas from '../../containers/ListaDeTarefa'
import { ListaContatos } from '../../containers/ListaDeTarefa/styles'

const Home = () => (
  <>
    <BarraLateral />
    <ListaDeTarefas />
    <BotaoAdicionar />
  </>
)

export default Home
