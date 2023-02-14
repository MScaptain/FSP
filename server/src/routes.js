const authenticationController = require('./controller/authenticationController')
module.exports=app=>{
    app.post('/register',(req,res)=>{
        console.log(req.body.email)
        console.log(req.body.password)
        
        res.send(req.body.email)
    })  
}