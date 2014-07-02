/** @jsx React.DOM */
var React = require('react');

var Tab = React.createClass({
    render: function () {
        return <li onClick={this.props.onClick} className={this.props.data.id == this.props.selected_id ? 'active' : ''}  >
                    <a>{this.props.data.title}</a>
                </li>
        
    }
})

module.exports = React.createClass({
    getInitialState: function() {
        return { selected_id: this.props.id };
    },
    selecTab : function(a, b, c){
        alert('1')
    },
    render: function () {
        var selected_id = this.props.selected_id;
        var clickHandler = this.selecTab;
        return  <ul className="categories-tabs">
                    {this.props.items.map(function(i){
                        return <Tab onClick={clickHandler} data={i} selected_id={selected_id}/>
                    })}
                    
                </ul>
    }
});
