const fs = require("fs");
const User = require("../Models/userModel");
const bcrypt = require('bcryptjs');

const express = require("express");
const Cryption = require("../utils/Cryption");
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      status: "success",
      results: users.length,
      data: {
        users,
      },
    });
  } catch (err) {
    console.log("unable to create user");
    res.status(400).json({
      status: "error",
      message: err,
    });
  }
};

exports.createUser = async (req, res) => {

  try {
    const newUser = await User.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        user: newUser
      },
    });
  } catch (err) {

    console.log("unable to create user");
    res.status(400).json({
      status: "error",
      message: err,
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const text =
     {
      "iv": req.params.iv,
      "encryptedData": req.params.encryptedData
    }

    const user_id = Cryption.decrypt(text);
   

    const newPassword = await bcrypt.hash(req.body.password, 12);
    console.log(newPassword);
    const user = await User.findByIdAndUpdate(user_id, {"password": newPassword }, {
      new: true,
      runValidators: true,

    });
    console.log(user);
    res.status(200).json({
      status: "success",
      data: {
        user,
      }
    })
  } catch (err) {
    console.log("unable to update password");
    res.status(400).json({
      status: "error",
      message: err,
    });

  }
};

exports.getUniqueUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        user,
      }
    })
  } catch (err) {
    console.log("User not found");
    res.status(400).json({
      status: "error",
      message: err,
    });
  }

};
exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    console.log("unable to delete user");
    res.status(200).json({
      status: "success",
      message: err,
    });
  }
};


