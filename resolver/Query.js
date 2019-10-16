const { arrPerfil, arrUsuarios } = require('../data/db')

module.exports = {
  usuarios() {
    return arrUsuarios
  },
  usuario(_, { id }) {
    const usuarioFiltrado = arrUsuarios.filter(
      usuario => usuario.id === id
    )
    return usuarioFiltrado ? usuarioFiltrado[0] : null
  },
  perfis() {
    return arrPerfil
  },
  perfil(_, { id }) {
    return arrPerfil.find(perfil => perfil.id === id)
  }
}
