const { arrUsuarios, setNextId } = require('../data/db')

module.exports = {
  // { nome, email, idade }
  setNovoUsuario(_, args) {
    const existeEmail = arrUsuarios.some(
      usuario => usuario.email === args.email
    )

    if (existeEmail) {
      throw new Error('E-mail já cadastrado')
    }

    const novoUsuario = {
      id: setNextId(),
      ...args,
      perfil_id: 2,
      tatus: 'ATIVO'
    }

    arrUsuarios.push(novoUsuario)
    return novoUsuario
  },
  deleteUsuario(_, { id }) {
    const userIndex = arrUsuarios.findIndex(
      usuario => usuario.id === id
    )

    if (userIndex < 0 ) {
      throw new Error('Esse usuario não existe')
    }

    const usuarioExcluido = arrUsuarios.splice(userIndex, 1)

    return usuarioExcluido ? usuarioExcluido[0] : null
  },
  alteraUsuario(_, args) {
    const userIndex = arrUsuarios.findIndex(
      usuario => usuario.id === args.id
    )

    if (userIndex < 0 ) {
      throw new Error('Usuario não encontrado')
    }

    const usuarioAlterado = {
      ...arrUsuarios[userIndex],
      ...args
    }
    arrUsuarios.splice(userIndex, 1, usuarioAlterado)
    return usuarioAlterado

  }
}
