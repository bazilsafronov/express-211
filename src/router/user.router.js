const express = require('express');
const React = require('react');
const ReactDomServer = require('react-dom/server');
const Main = require('../view/components/Main');
const { User } = require('../../db/models');


const router = express.Router();

router.get('/main', (req, res) => {
    const main = React.createElement(Main, {title: 'main page'});
    const html = ReactDomServer.renderToStaticMarkup(main);
    res.write('<!DOCTYPE html>');
    res.end(html);
})

router.get('/list-page', async (req, res) => {
    const users = await User.findAll();
    const list = React.createElement(List, {title: 'list page', users});
    const html = ReactDomServer.renderToStaticMarkup(list);
    res.write('<!DOCTYPE html>');
    res.end(html);
})


module.exports = router;