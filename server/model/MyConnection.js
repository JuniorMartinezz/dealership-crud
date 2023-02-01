import mysql from 'mysql';

const db =  mysql.createPool({
                host: "localhost",
                user: "root",
                password: "1234",
                database: "dealership",
            })
            
export default db;