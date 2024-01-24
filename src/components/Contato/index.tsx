import { useEffect, useState } from 'react'
import * as S from './styles'
import { useDispatch } from 'react-redux'
import { remover, editar } from '../../store/reducers/contato'
import Contact from '../../models/Contact'

type Props = Contact

const Contato = ({ descricao: descricaoOriginal, titulo, tag, id }: Props) => {
  const dispatch = useDispatch()
  const [estaEdiando, setEstaEditando] = useState(false)
  const [descricao, setDescricao] = useState('')

  function cancelarEdicao() {
    setEstaEditando(false)
    setDescricao(descricaoOriginal)
  }

  useEffect(() => {
    if (descricaoOriginal.length > 0) {
      setDescricao(descricaoOriginal)
    }
  }, [descricaoOriginal])
  return (
    <S.Card>
      <S.Titulo>
        <i className="bi bi-person-fill"></i>
        {titulo}
      </S.Titulo>
      <S.Tag tag={tag}>{tag}</S.Tag>

      <S.Descricao
        disabled={!estaEdiando}
        value={descricao}
        onChange={(evento) => setDescricao(evento.target.value)}
      />

      {/*<S.Telefone>
        <i className="bi bi-telephone-fill"></i> 85989090564
      </S.Telefone>

      <S.Email>
        <i className="bi bi-envelope-fill"></i>{' '}
        marcos.rodrigues2015@yahoo.coml.br
      </S.Email>
  */}

      <S.BarraAcoes>
        {estaEdiando ? (
          <>
            <S.BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    titulo,
                    tag,
                    descricao,
                    id
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </S.BotaoSalvar>
            <S.BotaoCancelarRemover onClick={cancelarEdicao}>
              Cancelar
            </S.BotaoCancelarRemover>
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
