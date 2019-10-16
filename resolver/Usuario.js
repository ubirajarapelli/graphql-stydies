const { arrPerfil } = require('../data/db')

module.exports = {
  perfil(usuario) {
    return arrPerfil.find(perfil => perfil.id === usuario.perfil_id)
  }
}
