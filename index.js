const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
 const cors = require("cors");
// const bodyParser = require("body-parser");

const DB_URL = require("./config/db.config");
const { port, Origin } = require("./config/server.config");
const Post = require("./model/post.model")
// const orderRoute = require("./route/order.route");
// const userRoute = require("./route/user.route");
// const authUser = require("./route/authenticateUser.route");
// const menuRoute = require("./route/menuDetails.route");
// const menuModel = require("./model/menuDetails.model");


const app = express();

app.use(express.json())
app.use(cors())



app.get("/", (req, res) => {
  res.status(200).send("reached");
});
app.get("/working", (req, res) => {
  res.status(200).send("seemsToBeWorking...ig!");
});

async function connectDb() {
  const conn = await mongoose.connect(DB_URL);
  const db = mongoose.connection;
  db.on("error", () => {
    console.log("#### Error while connecting to mongoDB ####");
  });
  db.once("open", () => {
    console.log("#### Connected to mongoDB ####");
  });

    // await bulkCreate()
  require("./route/auth.route")(app)
  require("./route/post.route")(app)

  app.listen(port, () => {
    console.log("listening...");
  });
}
connectDb();



async function bulkCreate(){
  let arr=[
    {
      userId:"6588eab8893366a471747e5f",
      content:`What is Lorem Ipsum?
      Lorem Ipsum is simply dummy text of the printing and 
      typesetting industry. Lorem Ipsum has been the industry's
       standard dummy text ever since the 1500s, when an unknown printer 
      took a galley of type and scrambled it to make a type specimen book. It has"
    `
    },
    {
      userId:"6588eab8893366a471747e62",
      content:`What is Lorem Ipsum?
      Lorem Ipsum is simply dummy text of the printing and 
      typesetting industry. Lorem Ipsum has been the industry's
       standard dummy text ever since the 1500s, when an unknown printer 
      took a galley of type and scrambled it to make a type specimen book. It has"
    `
    },
    {
      userId:"6588eab8893366a471747e62",
      content:`What is Lorem Ipsum?
      Lorem Ipsum is simply dummy text of the printing and 
      typesetting industry. Lorem Ipsum has been the industry's
       standard dummy text ever since the 1500s, when an unknown printer 
      took a galley of type and scrambled it to make a type specimen book. It has"
    `
    },
    {
      userId:"6588eab8893366a471747e60",
      content:`What is Lorem Ipsum?
      Lorem Ipsum is simply dummy text of the printing and 
      typesetting industry. Lorem Ipsum has been the industry's
       standard dummy text ever since the 1500s, when an unknown printer 
      took a galley of type and scrambled it to make a type specimen book. It has"
    `
    },
    {
      userId:"6588eab8893366a471747e60",
      content:`What is Lorem Ipsum?
      Lorem Ipsum is simply dummy text of the printing and 
      typesetting industry. Lorem Ipsum has been the industry's
       standard dummy text ever since the 1500s, when an unknown printer 
      took a galley of type and scrambled it to make a type specimen book. It has"
    `
    },
  ]
  await Post.insertMany(arr)
}