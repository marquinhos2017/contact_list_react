import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contact from '../../models/Contact'
import * as enums from '../../utils/enums/Contato'

const contatosSlice = createSlice({
  name: 'contatos',
  initialState: {
    items: [
      new Contact(
        'Marcos Rodrigues',
        enums.Tag.CHURCH,
        'marcos.roddrigues2015@yahoo.com.br',
        '(85) 98909564',
        1
      ),
      new Contact(
        'Maria Juana',
        enums.Tag.HOME,
        'mariajuana@gmail.com',
        '(85) 4653-2534',
        2
      ),
      new Contact(
        'Drika Costa',
        enums.Tag.WORK,
        'drikaqueiroz@gmail.com',
        '(85) 9647-3123',
        3
      )
    ]
  },
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(
        (Contato) => Contato.id !== action.payload
      )
    },
    editar: (state, action: PayloadAction<Contact>) => {
      const IndexDoContato = state.items.findIndex(
        (t) => t.id === action.payload.id
      )

      if (IndexDoContato >= 0) {
        state.items[IndexDoContato] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Contact>) => {
      const ContatoJaExiste = state.items.find(
        (contato) =>
          contato.titulo.toLowerCase() === action.payload.titulo.toLowerCase()
      )

      if (ContatoJaExiste) {
        alert('Ja existe um contato com esse nome')
      } else {
        state.items.push(action.payload)
      }
    }
  }
})

export const { remover, editar, cadastrar } = contatosSlice.actions

export default contatosSlice.reducer
