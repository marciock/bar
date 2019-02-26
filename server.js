const express = require('express');
const bodyParser =require('body-parser');
const session=require('express-session');
const path =require('path');
const port = parseInt(process.env.PORT, 10) || 3000

const dev=process.env.NODE_ENV !== 'production';
const next=require('next');
const pathMatch = require('path-match');
const app=next({dev});
const handle=app.getRequestHandler();
const {parse} =require('url');

const models=require('./databases/models');

app.prepare().then(() => {
  const server = express()
 //const listUser=require('./routes/users')
 //const addUser=require('./routes/userAdd')

  //models.sequelize.sync().then(()=>{
    models.sequelize.sync().then(()=>{
      server.listen(port, err => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port}`)
      })
    })
   
  //})

  /*server.use(bodyParser.urlencoded({ extended: true}))
  server.get('/users', (req, res) => {
    
    return app.render(req, res, '/users/list',req.query)
  })

  server.get('/formuser', (req, res) => {
    
    return app.render(req, res, '/users/add',req.query)
  })

  server.use('/list',listUser)
  server.use('/adduser',addUser)
*/

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  


})


