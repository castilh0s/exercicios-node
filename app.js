var app = require('./config/server')

var routesHome = require('./app/routes/home')
routesHome(app)

var routesFormulario = require('./app/routes/formulario_inclusao_noticia')
routesFormulario(app)

var routesNoticias = require('./app/routes/noticias')
routeNoticias(app)

app.listen(3000, function() {
  console.log('Servidor rodando na porta 3000')
})