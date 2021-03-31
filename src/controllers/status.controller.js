const express = require('express');
const router = express.Router();
const statusService = require('../services/status.services');

exports.getStatus = async (request, response) => {
  try {
    const type = request?.params?.type;
    const status = await statusService.getStatus(type);
    response.send(status);
  } catch (error) {
    console.log(error);
  }
};
