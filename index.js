const express = require ("express")

const app = express()


app.listen(8000, ()=>{
    console.log("Server has started listening")
})


app.get("/about",(request, response)=>{
    response.json("Welcome to tech creek server")
})


app.get("/",(request, response)=>{
    response.json("This is the home page")
})






app.get("/",(request, response)=>{
    const myDetails = {
        name: "Austin Sampson"
        PhoneNumber: "09034482389"
        email: "uettsyrtete.com"
        address: "y45kkyyetetsj"
    }

    response.json(myDetails)
})