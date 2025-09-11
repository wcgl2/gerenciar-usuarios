const usuarios = [
    {
        nome: 'Matheus',
        email: 'matheus@email.com'

    },

    {
        nome: 'Marcos',
        email: 'marcos@email.com'

    },

    {
        nome: 'Lucas',
        email: 'lucas@email.com'

    },

    {
        nome: 'João',
        email: 'joao@email.com'

    }
];

    function retornarUsuarios(){
        return usuarios;

    }
    
    function adicionarNovoUsuario(nome){
        usuarios.push(nome);
    }

module.exports = {
    retornarUsuarios,
    adicionarNovoUsuario
}