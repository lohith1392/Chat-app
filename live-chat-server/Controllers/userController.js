const express = require("express");
const userModel = require("../models/userModel");
const loginController = () => {};
const expressAsyncHandler = require("express-async-handler");

const registerController = expressAsyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  //checking all fields
  if (!name || !email || !password) {
    res.send(400);
    throw Error("All necessary input fields have not been filled");
  }
  //already user
  const userExists = await userModel.findOne(email);
  if (userExists) {
    throw new Error("User already Exists");
  }
  // userName already Taken
  const userNameExists = await userModel.findOne(name);
  if (userNameExists) {
    throw new Error("User already In Use");
  }
  //create an entry in db
  const user = await userModel.create({ name, email, password });
});

module.exports = { loginController, registerController };
