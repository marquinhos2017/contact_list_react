import * as S from './styles'

const Contato = () => (
  <S.Card>
    <S.Titulo>
      <i className="bi bi-person-fill"></i>Marcos Rodrigues Correia
    </S.Titulo>
    <S.Tag>Home</S.Tag>
    <S.Descricao />

    <S.Telefone>
      <i className="bi bi-telephone-fill"></i> 85989090564
    </S.Telefone>

    <S.Email>
      <i className="bi bi-envelope-fill"></i> marcos.rodrigues2015@yahoo.coml.br
    </S.Email>

    <S.BarraAcoes>
      <S.Botao>Editar</S.Botao>
      <S.Botao>Remover</S.Botao>
    </S.BarraAcoes>
  </S.Card>
)

export default Contato
