const express = require("express")
const router = express.Router()

router.get("/", (req, res) =>{
    res.send("Página principal do painel ADM")
})

router.get("/posts", (req, res)=>{
    res.send("página de posts")
})

router.get("/categorias", (req, res)=>{
    res.send("página de categorias")
})

module.exports = router