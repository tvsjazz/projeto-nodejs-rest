const moment = require('moment');
const conexao = require('../infraestrutura/conexao');

class Atendimentos {
    adiciona(atendimento) {
        const dataCriacao = new Date();
        const data = moment(atendimento.data).format('YYYY-MM-DD HH:MM:SS');
        const atendimentoDatado = {...atendimento, dataCriacao, data};
        const sql = 'INSERT INTO Atendimentos SET ?';

        conexao.query(sql, atendimentoDatado, (erro, resultados) => {
            if (erro) {
                console.log(erro);
            } else {
                console.log(resultados);
            }
        })
    }
}

module.exports = new Atendimentos;