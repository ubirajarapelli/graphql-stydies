const { arrPerfil, arrUsuarios } = require('../data/db')

module.exports = {
  ola() {
    return 'Retorna o valor com o tipo'
  },
  horaAtual() {
    return new Date
  },
  usuarioLogado() {
    return {
      id: 1,
      nome: 'Ana da Web',
      email: 'anadaweb@email.com',
      idade: 23,
      salario_real: 1234.56,
      vip: true
    }
  },
  produtoEmDestaque() {
    return {
      nome: 'Notebook Gamer',
      preco: 4990.89,
      desconto: 0.15
    }
  },
  numerosMegaSena() {
    const crescente = (a, b) => a - b
    return Array(6)
      .fill(0).map(() => parseInt(Math.random() * 60 +1))
      .sort(crescente)
  },
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
