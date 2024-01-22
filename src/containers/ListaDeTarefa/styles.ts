import { styled } from 'styled-components'

export const ListaContatos = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 32px;
  column-gap: 32px;
`
export const Container = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`
