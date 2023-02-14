module.exports={
    port: 8081,
    db:{
        database: process.env.DB_NAME || 'tbdb',
        user:process.env.DB_USER || 'tbdb',
        password:process.env.DB_PASSWORD || 'tbdb',
        options:{
            dialect: process.env.DIALECT||'sqlite',
            host: process.env.HOST||'localhost',
            storage:'./tbdb.sqlite'
        }
    }
}   