// import express from "express";
// import bcrypt from "bcrypt";
// import { createUser, getUserByName } from "../helper.js";
// import jwt from "jsonwebtoken";

// const router = express.Router();

// async function genPassword(password) {
//   const salt = await bcrypt.genSalt(10);
//   const hashPassword = await bcrypt.hash(password, salt);
//   console.log({ salt, hashPassword });
//   return hashPassword;
// }

// //REGISTER
// router.post("/register", async (req, res) => {
//   const { username, password, email } = req.body;
//   const hashPassword = await genPassword(password);
//   const newUser = {
//     username: username,
//     email: email,
//     password: hashPassword,
//   };

//   const result = await createUser(newUser);
//   res.send(result);
// });

// //LOGIN
// router.post("/login", async function (request, response) {
//   // db.users.insertOne(data)
//   const { username, password } = request.body;
//   // db.users.findOne({username: "aara"})
//   const userFromDB = await getUserByName(username);
//   console.log(userFromDB);

//   if (!userFromDB) {
//     response.status(401).send({ message: "Invalid credentials" });
//   } else {
//     const storedPassword = userFromDB.password; // hashed password
//     const isPasswordMatch = await bcrypt.compare(password, storedPassword);
//   }
//   if (isPasswordMatch) {
//     const token = jwt.sign({ id: userFromDB._id });
//     response.send({ message: "Successful login", token: token });
//   } else {
//     response.status(401).send({ message: "Invalid credentials" });
//   }
// });

// export const authRoute = router;
