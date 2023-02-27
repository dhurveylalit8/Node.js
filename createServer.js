// const http = require("http")
// http.createServer((req, res)=>{
//     res.write("Hellow coders!")
//     res.end()
// }).listen(4900);

// ===============

// another method

const http = require("http")

function dataCode(req, res){
    res.write("Hellow Coders!")
    res.end()
}

http.createServer(dataCode).listen(4900)