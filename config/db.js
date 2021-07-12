if(process.env.NODE_ENV == "production"){
    module.exports = {mongoURI: "mongodb+srv://afonsoeiras:12345678@blogapp-prod.jnmxb.mongodb.net/blogapp?retryWrites=true&w=majority"}
}else{
    module.exports = {mongoURI: "mongodb://localhost/blogapp"}
}