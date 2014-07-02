

/** @jsx React.DOM */
var React = require('react'),
	Logo = require('./componets/logo'),
	RegistrationBtns = require('./componets/registrationBtns'),
    Index;

Index = React.createClass({
    render: function () {
        return <div id="main group buttons-container">
    		<div className="sidebar">
    			<div>
    				<Logo/>
	    			<div className="login">
	    				<input placeholder='Yor E-mail' type="text" />
	    				<input placeholder='Yor Password' type="password" />
	    				<a href="#/wizard" className="login-btn btn btn-success" >Login</a>
	    				<a href="" className="link">Login with</a>
	    				<RegistrationBtns/>
	    				<a href="" className="link">Forgot yor password / login?</a>
	    				<input placeholder='Yor E-mail' type="text" />
	    				<input placeholder='Yor Password' type="password" />
	    				<a  className="registr-btn btn btn-primary" >Registration<i className="fa fa-angle-up"></i></a>
	    			</div>
    			</div>
    		</div>
    		<div className="content">
    			<div className="promo">
					<div className="step1">
	    				<h1>Step 1</h1> 
	    				<p>Get full control for all your finances. Choose and fill only what you really have.</p>
	    			</div >
	    			<div className="step2">
	    				<h1>Step 2</h1>
	    				<p>Check your results and receive advices for improvement</p>
	    			</div>
	    			<div  className="step3">
	    				<h1>Step 3</h1>
	    				<p>Save your expenses with our promotions add get additional discounts.</p>
	    			</div>
    			</div>
    		</div>
    	</div>
    }
});

module.exports = Index;