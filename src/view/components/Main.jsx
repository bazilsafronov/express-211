const React = require('react');
const Layout = require('../Layout');

module.exports = function Main(props) {
    return (
        <Layout title={props.title}>
            <div>
                <h1>Main page</h1>
            </div>
        </Layout>
    );
};
