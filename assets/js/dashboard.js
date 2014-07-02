

/** @jsx React.DOM */
var React = require('react'),
	Diagram1 = require('./componets/diagram1'),
	Diagram2 = require('./componets/diagram2'),
	Diagram3 = require('./componets/diagram3');

module.exports = React.createClass({
    render: function () {
        return <div className="dashboard">
                    <div className="dashboard-content">
                    	<Diagram1/>

                        <Diagram2/>
                        
                        <Diagram3/>
                    </div>
    			</div>
    }
});