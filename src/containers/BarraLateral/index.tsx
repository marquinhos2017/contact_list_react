import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'

const BarraLateral = () => (
  <S.aside>
    <div>
      <S.Campo type="text" placeholder="Buscar" />
      <S.Filtros>
        <FiltroCard legenda="Work" contador={2} />
        <FiltroCard legenda="Family" contador={1} />
        <FiltroCard legenda="Church" contador={2} />
        <FiltroCard legenda="Todas" contador={5} ativo />
      </S.Filtros>
    </div>
  </S.aside>
)

export default BarraLateral
