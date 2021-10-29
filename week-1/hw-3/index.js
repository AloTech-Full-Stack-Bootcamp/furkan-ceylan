const express = require("express");
const app = express();

//get index page
app.get("/index", (res) => {
  res.send("<h1>I am index file.</h1>");
});

//get hakkimda page
app.get("/hakkimda", (res)=>{
  res.send("<h1>I am hakkimda file.</h1>");
});

//get iletisim page
app.get("/iletisim",(res)=>{
 res.send("<h1>I am iletisim file.</h1>");
});


const port = 5000;

//listen the port
app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});

