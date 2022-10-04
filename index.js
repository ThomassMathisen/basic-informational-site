import dotenv from "dotenv"
import http from "http"
import fs from "fs/promises"
import path from 'path';
dotenv.config()

const port = process.env.PORT || 3000

const app = http.createServer( async (req, res) => {
  res.statusCode = 200
  res.setHeader("Content-Type", "text/html")
  if (req.url === "/") {
    res.end(await fs.readFile("./pages/index.html"))
  } else if (req.url === "/about") {
    res.end(await fs.readFile("./pages/about.html"))
  } else if (req.url === "/contact-me") {
    res.end(await fs.readFile("./pages/contact-me.html"))
  } else {
      res.statusCode = 404
      res.end(await fs.readFile("./pages/404.html"))
  }
})
app.listen(port, () => {
  console.log(`server running on port ${port}`)
})