var React = require('react');
var ReactDOM = require('react-dom');
var APP = require('./components/app');

document.addEventListener("DOMContentLoaded", function () {
    ReactDOM.render(<APP />, document.getElementById('app'));
});