/** @jsx React.DOM */
var React = require('react'),
 Tabs = require('./componets/Tabs');

var Panel = React.createClass({
    toggle : function(e){
        var title = e.target.dataset.title;
        this.props.onClick(this.props.title, !this.props.colapsed);
    },
    render: function(){
        var colapsed = this.props.colapsed ;
        var itemClass = "item " + (colapsed ? " " : " open");
        var btnClass = "active fa" +(colapsed ? " fa-angle-down" : " fa-angle-up");

        var tabsBlock;
        if (this.props.title == 'Expenditure'){
            var tabItems = [
             { title : 'Home', id : 2},
            { title : 'Transport', id : 3}
            ];
            tabsBlock = <Tabs items={tabItems} id={2}/>;
        }
        return <div  className={itemClass}>
                <div className="offset">
                    <div onClick={this.toggle} data-title={this.props.title}  className="title">
                        <h2 >{this.props.title}</h2>
                        <a className={btnClass}>
                        </a>
                    </div>
                </div>
                {tabsBlock}
                 <table>
                        <thead>
                            <tr>
                                <th className="category">Category</th>
                                <th className="planing">Planing</th>
                                <th className="actual">Actual</th>
                            </tr>
                        </thead>
                        <tbody >
                            {this.props.items.map(function(i){
                                return <tr>
                                    <td>{i.title}</td>
                                    <td>{i.planing}</td>
                                    <td>{i.actual}</td>
                                </tr>
                            })}
                        </tbody>   
                    </table>
               </div>
    }
})

module.exports = React.createClass({
    handleClick : function(title, open){
        var categories = this.state.categories;
        categories.forEach(function(c){
            c.open = false;
            if (c.title == title){
                c.open = !c.open;
            }
        })
        this.setState({ categories : categories})
    },
    getInitialState: function() {
        return { 
            selected : 'Income',
            categories: [
                { title : 'Income', open : true},
                { title :'Expenditure', open : false},
                { title :'Savings', open : false}
            ] 
        }
    },
    render: function () {
        var items = [
            { 
                status : 'none', 
                title : 'Take Home Pay', 
                planing : '$57', 
                actual : '$66,999' 
            },
            { 
                status : 'completed', 
                title : 'Take Home Pay', 
                planing : '$57', 
                actual : '$66,999' 
            },
            { 
                status : 'skip', 
                title : 'Take Home Pay', 
                planing : '$57', 
                actual : '$66,999' 
            }
        ];
        
        return  <div className="budget">
                    <div className="budget-container">
                    {this.state.categories.map(function(c){
                        return <Panel selected={this.state.selected} onClick={this.handleClick} colapsed={!c.open} title={c.title} items={items} />
                    }.bind(this))}
                    </div>
    			</div>
    }
});