import { useDispatch, useSelector } from 'react-redux'
import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro'

const BarraLateral = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)
  return (
    <S.aside>
      <div>
        <S.Campo
          type="text"
          placeholder="Buscar"
          value={termo}
          onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
        />
        <S.Filtros>
          <FiltroCard legenda="Work" contador={2} />
          <FiltroCard legenda="Family" contador={1} />
          <FiltroCard legenda="Church" contador={2} />
          <FiltroCard legenda="Todas" contador={5} ativo />
        </S.Filtros>
      </div>
    </S.aside>
  )
}

export default BarraLateral
