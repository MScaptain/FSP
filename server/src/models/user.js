const user1 = (sequelize,DataTypes)=>
    sequelize.define('user',{
        email:{
            type:DataTypes.STRING,
            unique:  true
        },
        password: DataTypes.STRING
    
    })

    module.exports = user1