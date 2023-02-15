module.exports={
    port: process.env.PORT || 8081,
    db:{
        database: process.env.DB_NAME || 'testdb',
        user: process.env.DB_USER || 'postgres',
        password:process.env.DB_PASSWORD || 'tbdb',
        options:{
            dialect: 'postgres',
            host: process.env.HOST ||'localhost',
            storage:'./testdb.postgres'
        }
    }
}  //connection not working
