import { useState } from 'react'
import * as S from './styles'
import * as enums from '../../utils/enums/Contato'

type Props = {
  titulo: string
  tag: enums.Tag
  descricao: string
}

const Contato = ({ descricao, titulo, tag }: Props) => {
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
            <S.BotaoCancelarRemover>Remover</S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Contato
