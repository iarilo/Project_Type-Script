 
 import express from 'express';
 const userRouter = express.Router()


  userRouter.use((req,res,next) => {
 console.log('Обработчик users' )
 next()
  })

 userRouter.post('/Login',(req,res) => {
 res.send(' Hellow  Login')
 })

 userRouter.post('/Registr',(req,res) => {
 res.send('Hellow Registr')
 })

export{userRouter}






















