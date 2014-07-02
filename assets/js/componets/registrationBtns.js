

/** @jsx React.DOM */
var React = require('react');

var RegistrationBtns = React.createClass({
    render: function () {
        return  <div className="registration-btns">
					<a href="" className="fa fa-facebook"></a>
					<a href="" className="fa fa-twitter"></a>
					<a href="" className="fa fa-google-plus"></a>
					<a href="" className="fa fa-angle-down"></a>	    					
				</div>
    }
});

module.exports = RegistrationBtns;