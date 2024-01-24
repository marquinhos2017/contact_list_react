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
    id: number,
    descricao2: string
  ) {
    ;(this.titulo = titulo),
      (this.tag = tag),
      (this.descricao = descricao),
      (this.id = id),
      (this.descricao2 = descricao2)
  }
}

export default Contact
