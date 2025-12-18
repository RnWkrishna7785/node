const http=require("http")

http.createServer((req, res) => {
    

    const path = req.url
    const method = req.method
    
    console.log(`Received ${method} request for ${path}`)

    if (path.includes("/abc") && method === "GET") {
        res.write("Hello from /abc endpoint")
        res.end()
    }
    else {
        res.write("Hello, World!")
        res.end()
    }
}).listen(5678);
console.log("Server is listening on port 5678")