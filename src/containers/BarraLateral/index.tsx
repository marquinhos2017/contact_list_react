import { useDispatch, useSelector } from 'react-redux'
import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro'

import * as enums from '../../utils/enums/Contato'

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
          <FiltroCard valor={enums.Tag.WORK} criterio="tag" legenda="Work" />
          <FiltroCard valor={enums.Tag.HOME} criterio="tag" legenda="Home" />
          <FiltroCard
            valor={enums.Tag.CHURCH}
            criterio="tag"
            legenda="Church"
          />
          <FiltroCard criterio="todas" legenda="Todas" />
        </S.Filtros>
      </div>
    </S.aside>
  )
}

export default BarraLateral
