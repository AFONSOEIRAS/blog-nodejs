/**
 * npm install --save express

npm install --save express-handlebars

npm install --save mongoose */
const express = require("express")
const handlebars = require("express-handlebars")
const app = express()
const mongoose = require("mongoose")
const admin = require("./routes/admin")
const path = require("path")
//Configurações
    //Utilizando o express no lougar do Body Parser
    app.use(express.urlencoded({extended:true}))
    app.use(express.json())
	//Handlebars
	app.engine('handlebars', handlebars({defaultLayout: 'main'  }))
    app.set('view engine', 'handlebars');
	//Mongoose
		//Em Breve
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