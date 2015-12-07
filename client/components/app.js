var React = require('react');
var TopNav = require('./topNav.component');

module.exports = React.createClass({
  render: function() {
    return (<div id="page-container">
      <TopNav></TopNav>
      <div id="page-body">
        <h1>hello 2world</h1>

      </div>
      <footer>Thanks for visiting</footer>
    </div>)
  }
})