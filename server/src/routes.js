const { json } = require('body-parser')
const authenticationController = require('./controller/authenticationController')
module.exports=app=>{
    app.post('/register',authenticationController.register)  
    // app.get('/register',(req,res)=>{
    //     console.log(json.toString(req.body.email))
    //     console.log(req.body.password)
        
    // })  
} 