import express from "express";
import {
  createTransaction,
  deleteTransactionById,
  getTransaction,
  updatetransaction,
  getTransactionById,
} from "../helper.js";

const router = express.Router();
//CREATE TRANSACTION
router.post("/", async (req, res) => {
  const data = req.body;
  const result = await createTransaction(data);
  res.send(result);
});

//READ TRANSACTION
router.get("/", async (req, res) => {
  const result = await getTransaction();
  res.send(result);
});
//READ TRANSACTION BY ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const result = await getTransactionById(id);
  result
    ? res.send(result)
    : res.status(404).send({ message: "No such player found" });
});

//UPDATE TRANSACTION
router.put("/edit/:id", async (req, res) => {
  const updateData = req.body;
  const result = await updatetransaction(updateData);
  res.send(result);
});

//DELETE TRANSACTION
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const transaction = await deleteTransactionById(id);
  res.send(transaction);
});

export const transactionRoute = router;
