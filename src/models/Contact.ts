import * as enums from '../utils/enums/Contato'

class Contact {
  titulo: string
  tag: enums.Tag
  email: string
  telefone: string
  id: number

  constructor(
    titulo: string,
    tag: enums.Tag,
    email: string,
    telefone: string,
    id: number
  ) {
    ;(this.titulo = titulo),
      (this.tag = tag),
      (this.email = email),
      (this.telefone = telefone),
      (this.id = id)
  }
}

export default Contact
