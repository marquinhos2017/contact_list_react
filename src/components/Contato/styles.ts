import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import * as enums from '../../utils/enums/Contato'
type TagProps = {
  tag?: enums.Tag
}

function retornaCorDeFundo(props: TagProps): string {
  if ('tag' in props) {
    if (props.tag === enums.Tag.HOME) return variaveis.purple
    if (props.tag === enums.Tag.CHURCH) return variaveis.vermelho
    if (props.tag === enums.Tag.WORK) return variaveis.verde
  }

  return '#ccc'
}

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px rgba(0, 0, 0, 0.25);
  padding: 32px;
  margin-bottom: 32px;
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
  display: inline-block;
`

export const Telefone = styled.p`
  font-size: 18px;
  margin-top: 16px;
`

export const Email = styled.p`
  font-size: 18px;
  margin-top: 8px;
`

export const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  color: #fff;
  font-weight: bold;
  font-size: 12px;
  background-color: ${(props) => retornaCorDeFundo(props)};
  border-radius: 8px;
  margin-left: 16px;
  display: inline-block;
`

export const BarraAcoes = styled.div`
  padding-top: 16px;
`

export const Botao = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: #2f3640;
  border-radius: 8px;
  margin-right: 8px;
`

export const Descricao = styled.textarea`
  color: black;
  font-size: 14px;
  display: block;

  height: 16px; /* Set the desired height of the textarea */
  line-height: 16px; /* Set line-height to the same value as the height */
  vertical-align: middle;
  width: 100%;
  margin-bottom: 16px;
  margin-top: 16px;
  resize: none;
  border: none;
  background-color: transparent;
  font-weight: bold;
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`
export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
