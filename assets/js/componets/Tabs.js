/** @jsx React.DOM */
var React = require('react');

var Tab = React.createClass({
    render: function () {
        var itemClasses = this.props.data.id == this.props.selected_id ? 'active' : '';
        return <li onClick={this.props.onClick} className={itemClasses}  >
                    <a data-id={this.props.data.id}>{this.props.data.title}</a>
                </li>
        
    }
})

module.exports = React.createClass({
    getInitialState: function() {
        return { selected_id: this.props.id };
    },
    selecTab : function(e){
        var id = e.target.dataset.id;
        this.setState({ selected_id : id });
        if (this.props.change)
            this.props.change(id);
    },
    render: function () {
        var selected_id = this.state.selected_id;
        var clickHandler = this.selecTab;
        return  <ul className="categories-tabs">
                    {this.props.items.map(function(i){
                        return <Tab data={i} onClick={clickHandler} data={i} selected_id={selected_id}/>
                    })}
                    
                </ul>
    }
});
