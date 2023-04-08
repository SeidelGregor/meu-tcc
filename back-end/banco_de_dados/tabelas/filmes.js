/*Arquivo responsavel por requisetar a tabela de filmes por meio de uma 
view pré criada no banco de dados transformá-la em um JSON e retornar esse JSON, ao final esse método
é exportado*/

const bd = require("../bd_locadora");

function pegarFilmes() {
    const selectTabela = 'select * from filmes_view;';
    return new Promise((resolve, reject) => {
        bd.connect((erro) => {
            if (erro) {
                reject(erro);
            } else {
                bd.query(selectTabela, (erro, resultados) => {
                    bd.end();
                    if (erro) {
                        reject(erro);
                    } else {
                        const jsonFilmes = JSON.parse(JSON.stringify(resultados));
                        resolve(jsonFilmes);
                    }
                });
            }
        });
    })
}


module.exports = { pegarFilmes };