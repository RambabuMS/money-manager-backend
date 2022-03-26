import { ObjectId } from "mongodb";
import { client } from "./index.js";

export async function updatetransaction(updateData) {
  return await client
    .db("money")
    .collection("transaction")
    .updateOne({ _id: ObjectId(id) }, { $set: updateData });
}

export async function getTransaction() {
  return await client.db("money").collection("transaction").find({}).toArray();
}
export async function getTransactionById() {
  return await client
    .db("money")
    .collection("transaction")
    .findOne({ _id: ObjectId(id) });
}

export async function createUser(data) {
  return await client.db("money").collection("users").insertOne(data);
}

export async function getUserByName(username) {
  return await client
    .db("money")
    .collection("users")
    .findOne({ username: username });
}

export async function createTransaction(data) {
  return await client.db("money").collection("transaction").insertMany(data);
}

export async function deleteTransactionById(id) {
  return await client
    .db("money")
    .collection("transaction")
    .deleteOne({ _id: ObjectId(id) });
}
