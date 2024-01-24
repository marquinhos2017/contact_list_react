import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contact from '../../models/Contact'
import * as enums from '../../utils/enums/Contato'

const contatosSlice = createSlice({
  name: 'contatos',
  initialState: {
    items: [
      new Contact(
        'Marcos Rodrigues Correia',
        enums.Tag.CHURCH,
        'marcos.rodirgues2015@yahoo.com.br',
        1
      ),
      new Contact('Maria Juana', enums.Tag.HOME, 'mariajuana@gmail.com', 2),
      new Contact('Drika Costa', enums.Tag.WORK, 'drikaqueiroz@gmail.com', 3)
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
    }
  }
})

export const { remover, editar } = contatosSlice.actions

export default contatosSlice.reducer
