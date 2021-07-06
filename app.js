/**
 * npm install --save express

npm install --save express-handlebars

npm install --save mongoose 

npm install --save express-session

npm install --save connect-flash
*/
const express = require("express")
const handlebars = require("express-handlebars")
const app = express()
const mongoose = require("mongoose")
const admin = require("./routes/admin")
const path = require("path")
const session = require("express-session")
const flash = require("connect-flash")
//Configurações
	//Sessão
	app.use(session({
		secret: "cursodenode",
		resave: true,
		saveUninitialized: true
	}))
	app.use(flash())
	//Middleware
	app.use((req,res,next) => {
		res.locals.success_msg = req.flash("success_msg")
		res.locals.error_msg = req.flash("error_msg")
		next()
	})
    //Utilizando o express no lougar do Body Parser
    app.use(express.urlencoded({extended:true}))
    app.use(express.json())
	//Handlebars
	app.engine('handlebars', handlebars({defaultLayout: 'main'  }))
    app.set('view engine', 'handlebars');
	//Mongoose
	mongoose.Promise = global.Promise;
	mongoose.connect("mongodb://localhost/blogapp").then(() =>{
		console.log("Conectado ao mongo");
	}).catch((err) =>{
		console.log("Erro ao se conectar:" + err);
	})
	
	//Public
	app.use(express.static(path.join(__dirname, "public")))


//Rotas
	app.get("/", (req, res) =>{res.send("Rota Principal")})

	app.get("/posts", (req, res) =>{res.send("Lista Posts")})


	app.use("/admin", admin);
//Outros

const PORT = 8081
app.listen(PORT,() => { 
	console.log("Servidor rodando na url http://localhost:8081")
})