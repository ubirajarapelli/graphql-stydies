let id = 1
function setNextId() {
  return id++
}

const arrUsuarios = [
  {
    id: setNextId(),
    nome: 'João Silva',
    email: 'jsilva@wemail.com',
    idade: 29,
    perfil_id: 1,
    status: 'ATIVO'
  },
  {
    id: setNextId(),
    nome: 'Rafael Junior',
    email: 'rafajunior@wemail.com',
    idade: 31,
    perfil_id: 2,
    status: 'INATIVO'
  },
  {
    id: setNextId(),
    nome: 'Daniela Smith',
    email: 'danismithwemail.com',
    idade: 24,
    perfil_id: 2,
    status: 'BLOQUEADO'
  }
]

const arrPerfil = [
  { id: 0, nome: 'Owner' },
  { id: 1, nome: 'Administrador' },
  { id: 2, nome: 'Commun' }
]

module.exports = {
  arrUsuarios,
  arrPerfil,
  setNextId
}
