/** @jsx React.DOM */
var React = require('react')
, Tabs = require('./componets/Tabs');


var Item = React.createClass({
    handelClick : function(e){
        e.preventDefault();
        this.setState({ visible : !this.state.visible })
    },
    getInitialState : function(){
        return { visible : this.props.data.visible }
    },
    render : function(){
        var classes = 'fa fa-angle-down ' + (this.state.visible ? 'active' : '');
        return <div onClick={this.handelClick}>
                <h3>{this.props.data.title}</h3>
                <a href="" className={classes}>
                </a>    
            </div>
    }
})

module.exports = React.createClass({
    settingsClick : function(e){
        e.preventDefault()
        alert('settings...');
    },
    incomeClick : function(e){
        e.preventDefault()
        this.setState({ selected : 'income' })
    },
    expendiouresClick : function(e){
        e.preventDefault();
        this.setState({ selected : 'expendioure' })
    },
    savingsClick : function(e){
        e.preventDefault()
        alert('savings...');
    },
    tabsClick : function(id){
        alert(id);
    },
    getInitialState : function(){
        return { selected : 'income' }
    },
    render: function () {
        var items = [
            { title : 'Take Home Pay' , visible: false },
            { title : 'Take Home Pay' , visible: false},
            { title : 'Take Home Pay' , visible: false},
            { title : 'Take Home Pay' , visible: false},
            { title : 'Take Home Pay', visible: false },
            { title : 'Take Home Pay', visible: false},
            { title : 'Take Home Pay' , visible: false},
            { title : 'Take Home Pay', visible: false},
            { title : 'Take Home Pay', visible: false},
            { title : 'Take Home Pay' , visible: false}
        ]
        var tabs;

        if (this.state.selected == 'expendioure'){
            var expendioure_categories = [
                { title : 'Home', id : 2},
                { title : 'Transport', id : 3}
            ];
            tabs = <Tabs change={this.tabsClick} items={expendioure_categories} id={2}/>
        }

        return  <div className="wizard">
                     <ul id="wizard-navigation">
                        <li onClick={this.settingsClick} className="settings">
                            <a href="">&nbsp;</a>
                        </li>
                        <li onClick={this.incomeClick}>
                            <a href="">Income</a>
                        </li>
                        <li onClick={this.expendiouresClick}>
                            <a href="" className="current">Expenditure</a>
                        </li>
                        <li onClick={this.savingsClick}>
                            <a href="">Savings</a>
                        </li>
                    </ul>
                    {tabs}
                    <div className="categories-set group">
                        {items.map(function(i){
                            return <Item data={i}/>
                        })}
                    </div>
                    <a className="wizard-next-btn btn btn-success"  >Next</a>
                </div>
    }
});