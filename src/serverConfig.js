const express = require('express');
const morgan = require('morgan');
const path = require('path');

const serverConfig = (server) => {
    server.use(morgan('dev'));
    server.use(express.json());
    server.use(express.urlencoded({ extended: true }));
    server.use(express.static(path.join(process.cwd(), 'public')))
  };
  module.exports = serverConfig;
  