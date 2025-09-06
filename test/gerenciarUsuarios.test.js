const { retornarUsuarios, adicionarNovoUsuario } = require('../src/gerenciarUsuarios');
const { expect } = require('chai');

describe('Testar as funções de Gestão de Usuários', function () {
    it('Validar que posso adicionar um novo nome de usuário na lista', function () {
        // 1. Adicionar um novo nome na lista de usuarios
        adicionarNovoUsuario('Maria');

        // 2. Retornar a lista de usuários na caisa lista de usuarios
        const listaDeUsuarios = retornarUsuarios();


        // 3. Comparar se o novo nome está no fim da lista de usuarios

        expect(listaDeUsuarios.at(-1)).to.equal('Maria');

    })

});