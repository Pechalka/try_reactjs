

/** @jsx React.DOM */
var React = require('react');

var Logo = React.createClass({
    render: function () {
        return  <a href="#/login">
    				<img className="logo" src="build/img/logo.png" />
	    		</a>
    }
});

module.exports = Logo;