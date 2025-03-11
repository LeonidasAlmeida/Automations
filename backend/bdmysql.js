const mysql = require('mysql2/promise');

// Criar conexão assíncrona com o MySQL
const pool = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"root",
    database:'paragenstrack',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// 📌 CREATE - Inserir um novo registro

const create = async (inicio,fim,minutos,data,codigoParagem,descricaoParagem) => {
    try {
        const connection = await pool.getConnection();
        const [result] = await connection.execute(
            'INSERT INTO tempocapturado (tempoinicial,tempofinal,minutos,data,codigoParagem,descricaoParagem) VALUES (?, ?, ?, ?, ?, ?)',
            [inicio,fim,minutos,data,codigoParagem,descricaoParagem]
        );
        return result.insertId;
    } catch (err) {
        throw new Error(`Erro ao inserir: ${err.message}`);
    }};

// 📌 READ - Buscar todos os registros

const readAll = async () => {
    try {
        const connection = await pool.getConnection();
        const [rows] = await connection.execute('SELECT * FROM login');
        return rows;
    } catch (err) {
        throw new Error(`Erro ao buscar registros: ${err.message}`);
    }};

    const readLast = async () => {
        try {
            const connection = await pool.getConnection();
            const [rows] = await connection.execute('select * from tempocapturado where idtempocapturado = (select MAX(idtempocapturado) from tempocapturado)');
            return rows;
        } catch (err) {
            throw new Error(`Erro ao buscar registros: ${err.message}`);
        }};

// 📌 UPDATE - Atualizar um registro pelo ID

const update = async (id, novoNome, novaIdade) => {
    try {
        const connection = await pool.getConnection();
        const [result] = await connection.execute(
            'UPDATE sua_tabela SET nome = ?, idade = ? WHERE id = ?',
            [novoNome, novaIdade, id]
        );
        return result.affectedRows;
    } catch (err) {
        throw new Error(`Erro ao atualizar: ${err.message}`);
    }};

// 📌 DELETE - Deletar um registro pelo ID
const remove = async (id) => {
    try {
        const connection = await pool.getConnection();
        const [result] = await connection.execute(
            'DELETE FROM sua_tabela WHERE id = ?',
            [id]
        );
        return result.affectedRows;
    } catch (err) {
        throw new Error(`Erro ao deletar: ${err.message}`);
    }};

// Exportar as funções CRUD
module.exports = { create, readAll,readLast, update, remove,pool};
