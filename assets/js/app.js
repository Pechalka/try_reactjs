/** @jsx React.DOM */
var React    = window.React = require('react'), // assign it to winow for react chrome extension

    Index   = require('./index'),
    Budget   = require('./budget'),
    Wizard   = require('./wizard'),
    Dashboard = require('./dashboard'),
 	Route = require('react-nested-router').Route,

 	LeftMenu = require('./componets/LeftMenu'),
	Header = require('./componets/header'),
	Logo = require('./componets/logo');

var Yor = React.createClass({
    render: function () {
    	var selectedMenu = "wizard";
    	var title = "";

    	if (this.props.activeRoute){
    		selectedMenu = this.props.activeRoute.props.key.replace('/', '');
    		title = this.props.activeRoute.props.title;
		}

        return <div id="main group buttons-container">
    		<div className="sidebar">
    			<div>
    				<Logo/>
    				<LeftMenu selected={selectedMenu} />
    			</div>
    		</div>
    		<div className="content" >
    			<Header 
                    title={title}
                    description='Chec adn fill your finaces and plan.' />
    			{this.props.activeRoute}
    		</div>
            <div id="popup"></div>
    	</div>;
    }
});

var App = React.createClass({
    render: function () {
        return <div >
    			{this.props.activeRoute}
                <div id="popup"></div>
    		</div>;
    }
});

App.start = function () {
  //  React.renderComponent(<App/>, document.getElementById('app'));
    React.renderComponent((
	  <Route handler={App}>
		  <Route handler={Yor}>
		    <Route title="Budget" name="budget" handler={Budget}/>
		    <Route title="Wizard" name="wizard" handler={Wizard}/>
		    <Route title="Dashboard" name="dashboard" handler={Dashboard}/>
		  </Route>
		  <Route name="login" handler={Index}/>
		</Route>
	  
	), document.getElementById('app'));
};

module.exports = window.App = App;
