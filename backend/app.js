const express = require("express");
const cors = require("cors");
const { readdirSync } = require("fs");
const app = express();
require("./db/db");

require("dotenv").config();

const PORT = 2000;
//middleware
app.use(express.json());
app.use(cors());

// app.get('/',(req,res)=>{
//     res.send('hello world')
// })

//router
readdirSync("./routes").map((route) =>
  app.use("/api/v1", require("./routes/" + route))
);

const server = () => {
  app.listen(PORT, () => {
    console.log("listning to port:", PORT);
  });
};

server();
