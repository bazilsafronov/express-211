const express = require('express');
const morgan = require('morgan');

const serverConfig = (server) => {
    server.use(morgan('dev'));
    server.use(express.json());
    server.use(express.urlencoded({ extended: true }));
  };
  module.exports = serverConfig;
  