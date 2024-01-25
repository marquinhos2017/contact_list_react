import * as enums from '../utils/enums/Contato'

class Contact {
  titulo: string
  tag: enums.Tag
  descricao: string
  descricao2: string
  id: number

  constructor(
    titulo: string,
    tag: enums.Tag,
    descricao: string,
    descricao2: string,
    id: number
  ) {
    ;(this.titulo = titulo),
      (this.tag = tag),
      (this.descricao = descricao),
      (this.descricao2 = descricao2),
      (this.id = id)
  }
}

export default Contact
