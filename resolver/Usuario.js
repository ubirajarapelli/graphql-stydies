const { arrPerfil } = require('../data/db')

module.exports = {
  salario(usuario) {
    return usuario.salario_real
  },
  perfil(usuario) {
    return arrPerfil.find(perfil => perfil.id === usuario.perfil_id)
  }
}
