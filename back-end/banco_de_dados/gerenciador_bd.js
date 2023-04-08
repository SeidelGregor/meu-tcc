/*Arquivo que gerencia o banco de dados por meio da classe "Banco_locadora" e ao final exporta essa classe*/
const { pegarFilmes } = require('./tabelas/filmes');
const bd = require('./bd_locadora');
class Banco_locadora {
    /*Função assincrona responsavel por pegar a tabela de filmes retorna-lá e fechar a conexão*/
    async getFilmes(){
        try{
            const jsonFilmes = await pegarFilmes();
            return jsonFilmes;
        }catch(erro){
            return erro;
        }finally{
            bd.end();
        }
    }
    /*função responsavel por adicionar um novo filme a tabela filmes */
    addFilme(titulo = null, titulo_original = null, genero = null, ano_lancamento = null, tipo_traducao = null, sinopse = null){
        /*Fazer a verificação se os parametros do método são nulos e se não forem colocar o valores string 
        entre aspas simples para serem passados para o banco de dados*/
        if(titulo !== null){
            titulo = `'${titulo}'`;
        }
        if(titulo_original !== null){
            titulo_original = `'${titulo_original}'`;
        }
        if(genero !== null){
            genero = `'${genero}'`;
        }
        if(tipo_traducao !== null){
            tipo_traducao = `'${tipo_traducao}'`;
        }
        if(sinopse !== null){
            sinopse = `'${sinopse}'`;
        }
        //constante que recebe os valores formatados
        const valores = `(${titulo}, ${titulo_original}, ${tipo_traducao}, ${genero}, ${ano_lancamento}, ${sinopse}, 1, 0)`;
        //comando sql que será usado para inserir os dados
        const sql = `insert into filmes (titulo, titulo_original, legendado_dublado, genero, ano_lancamento, descricao, disponivel, reservado) values ${valores}`;
        try{
            //inserção dos dados
            bd.query(sql);
            console.log("Filme adicionado com sucesso");
        }catch{
            //mensagem de erro genérica
            console.log("Ocorreu um erro");
        }finally{
            //fechamento da conexão
            bd.end();
        }
    } 
}


module.exports = Banco_locadora;