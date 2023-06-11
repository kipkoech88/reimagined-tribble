const express = require("express")
const app = express()
const PORT = process.env.PORT || 5000
const ejs = require("ejs")

app.set("view engine", "ejs")
app.use(express.static("public"))

app.get("/", (req,res)=>{
    res.render("home.ejs")
})

app.listen(PORT, ()=>{
    console.log(`App runing on port ${PORT}`)
})