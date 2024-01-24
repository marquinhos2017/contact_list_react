import * as enums from '../utils/enums/Contato'

class Contact {
  titulo: string
  tag: enums.Tag
  descricao: string
  id: number

  constructor(titulo: string, tag: enums.Tag, descricao: string, id: number) {
    ;(this.titulo = titulo),
      (this.tag = tag),
      (this.descricao = descricao),
      (this.id = id)
  }
}

export default Contact
