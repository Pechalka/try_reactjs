

/** @jsx React.DOM */
var React = require('react');

module.exports = React.createClass({
    render: function () {
        return  <div className="header">
                    <h1>{this.props.title}</h1>
                    <p>{this.props.description}</p>
				</div>
    }
});
