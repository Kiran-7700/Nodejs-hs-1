const express=require("express")
const app = express();
const path=require("path")

app.use(express.json())

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
  });
app.get("/student",(req,res)=>{
    res.json([{Name:"kiran"},{Name:"varad"}])
})

app.listen(5000)