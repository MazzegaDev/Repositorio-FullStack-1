const express = require("express");
const server = express();
const PORT = 3000;
const userRoute = require("./router/userRouter");

server.set("view engine", "ejs");
server.use(express.urlencoded({ extended: true }));

server.use("/", userRoute);

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
