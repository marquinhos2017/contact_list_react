import { useState } from 'react'
import * as S from './styles'
import { useDispatch } from 'react-redux'
import { remover } from '../../store/reducers/contato'
import Contact from '../../models/Contact'

type Props = Contact

const Contato = ({ descricao, titulo, tag, id }: Props) => {
  const dispatch = useDispatch()
  const [estaEdiando, setEstaEditando] = useState(false)
  return (
    <S.Card>
      <S.Titulo>
        <i className="bi bi-person-fill"></i>
        {titulo}
      </S.Titulo>
      <S.Tag tag={tag}>{tag}</S.Tag>
      <S.Descricao value={descricao} />

      <S.Telefone>
        <i className="bi bi-telephone-fill"></i> 85989090564
      </S.Telefone>

      <S.Email>
        <i className="bi bi-envelope-fill"></i>{' '}
        marcos.rodrigues2015@yahoo.coml.br
      </S.Email>

      <S.BarraAcoes>
        {estaEdiando ? (
          <>
            <S.BotaoSalvar onClick={() => setEstaEditando(false)}>
              Salvar
            </S.BotaoSalvar>
            <S.BotaoCancelarRemover>Cancelar</S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Contato
