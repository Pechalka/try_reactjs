

/** @jsx React.DOM */
var React = require('react');

module.exports = React.createClass({
    render: function () {
  		var link_css = {
  			'dashboard' : 'dashboard-link ',
  			'budget' : 'budget ',
  			'wizard' : 'wizard-link ',
  			'providers' : 'providers '
  		}
  		for(var key in link_css){
  			if (this.props.selected == key)
  				link_css[key] += ' active';
  		}
  		
  		return  <ul className="left-menu">
	    				<li className={link_css['wizard']}>
	    					<a href="#/wizard">Wizard</a>
	    				</li>
	    				<li className={link_css['budget']}>
	    					<a href="#/budget">Budget</a>
	    				</li>
	    				<li  className={link_css['dashboard']}>
	    					<a href="#/dashboard">Dushboard</a>
	    				</li>
	    				<li  href="#/providers" className={link_css['providers']}>
	    					<a href="">Providers</a>
	    				</li>
	    			</ul>
    }
});
