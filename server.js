import express from "express";
import mongoose from "mongoose";
// import Post from "./Post.js";
import router from "./router.js";

const { PORT, DB_URL } = process.env;

const app = express();

app.use(express.json());

app.use("/api", router);

// app.post("/", async (req, res) => {
//   const { author, title, content, picture } = req.body;
//   const post = await Post.create({ author, title, content, picture }); 
//   // res.status(200).json(post); 
//   // we could not send status code 200, if we send .json() it will be 200
//   res.json(post);
//   // try {
//   // } catch (error) {
//   //   res.status(500).json(error); 
//   // }
// });

// app.get("/get", (req, res) => {
//   console.log("REQ GET", req.query.test);
//   // res.status(200).send("Server is running");
//   res.status(200).json("Server is running"); 
// });

// app.post("/post", (req, res) => {
//   console.log("REQ POST", req.body);
//   // res.status(200).send("Server is running");
//   res.status(200).json("Server is running");
// });

const startApp = async () => {
  try {
    await mongoose.connect(DB_URL); // deprecated options: { useUnifiedTopology: true, useNewUrlParser: true }
    app.listen(PORT, () => console.log(`SERVER STARTED ON PORT ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

await startApp();
