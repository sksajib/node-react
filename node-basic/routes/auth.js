const express = require("express");
const router = express.Router();
const { users } = require("../controllers/auth");
router.get("/users", users);

//we have shifted the call back function to ../controller/auth.js
// from (req,res)=>{} and imported the function as {users}
// router.get("/users", (req, res) => {
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
module.exports = router;
