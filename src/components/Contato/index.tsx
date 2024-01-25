import { useEffect, useState } from 'react'
import * as S from './styles'
import { useDispatch } from 'react-redux'
import { remover, editar } from '../../store/reducers/contato'
import Contact from '../../models/Contact'
import { BotaoSalvar } from '../../styles'

type Props = Contact

const Contato = ({
  email: descricaoOriginal,
  titulo,
  tag,
  id,
  telefone: descricao2Original
}: Props) => {
  const dispatch = useDispatch()
  const [estaEdiando, setEstaEditando] = useState(false)
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  function cancelarEdicao() {
    setEstaEditando(false)
    setEmail(descricaoOriginal)
    setTelefone(descricao2Original)
  }

  useEffect(() => {
    if (descricaoOriginal.length > 0) {
      setEmail(descricaoOriginal)
    }
  }, [descricaoOriginal])

  useEffect(() => {
    if (descricao2Original.length > 0) {
      setTelefone(descricao2Original)
    }
  }, [descricao2Original])

  return (
    <S.Card>
      <S.Titulo>
        <i className="bi bi-person-fill"></i>
        {titulo}
      </S.Titulo>
      <S.Tag tag={tag}>{tag}</S.Tag>

      <S.Email>
        <S.Icon className="bi bi-envelope-fill"></S.Icon>
        <S.Descricao
          disabled={!estaEdiando}
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
        />
      </S.Email>

      <S.Telefone>
        <S.Icon className="bi bi-telephone-fill"></S.Icon>
        <S.Descricao2
          disabled={!estaEdiando}
          value={telefone}
          onChange={(evento) => setTelefone(evento.target.value)}
        />
      </S.Telefone>

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
            <BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    titulo,
                    tag,
                    email,
                    id,
                    telefone
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </BotaoSalvar>
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
