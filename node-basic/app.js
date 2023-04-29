//console.log("Process: ",process)
const { sum, sum2 } = require("./helpers");
const express = require("express"); //server 2
const https = require("http"); //server 1
const cors = require("cors");
const morgan = require("morgan");
const authRoutes = require("./routes/auth");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const total = sum2(9, 8);
console.log("Total: ", total);
// mongoose
//   .connect(
//     "mongodb+srv://sajibsaha859:PurbaMarrySajib859@node-basic.hrgjmtq.mongodb.net/?retryWrites=true&w=majority",
//     {}
//   )
//   .then(() => console.log("DB CONNECTED"))
//   .catch((err) => console.log("DB Connection error", err));
dotenv.config();
mongoose
  .connect(process.env.DATABASE, {})
  .then(() => console.log("DB CONNECTED"))
  .catch((err) => console.log("DB Connection error", err));
//Server 1
const server = https.createServer((req, res) => {
  res.end("PURBA my love");
});
server.listen(3010);

//Server 2
const app = express();
// app.use(
//   cors({
//     origin: ["http://localhost:3009"],
//   })
// );
app.use(cors());
app.use(morgan("dev"));
app.use("/api", authRoutes);

//./routers/auth.js

// app.get("/api/users", (req, res) => {
//   res.json({
//     GF: [
//       {
//         id: 1,
//         name: "Babe",
//         text: "I love purba",
//       },
//       {
//         id: 2,
//         name: "Mom",
//         text: "I love My Mom",
//       },
//     ],
//   });
// });
app.listen(3020, () => console.log("Server is running on port 3020"));
