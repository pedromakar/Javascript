module.exports = {
    autenticarUsuario: (email, senha) => {
        let acesso;
        if (email === 'adm@gmail.com' && senha === '123') {
            acesso = 'liberado';
            return { autenticado: true, mensagem: `Olá ${email}, seu acesso foi ${acesso}!` };
        } else {
            acesso = 'negado';
            return { autenticado: false, mensagem: `Olá ${email}, seu acesso foi ${acesso}!` };
        }
    }
};