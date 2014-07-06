/** @jsx React.DOM */
var React = require('react'),
 Tabs = require('./componets/Tabs');

var Panel = React.createClass({
    getInitialState: function() {
        return { colapsed: true };
      },
    toggle : function(){
        var state = this.state.colapsed;
        this.setState({ colapsed : !state })
    },
    render: function(){
        var itemClass = "item " + (this.state.colapsed ? " " : " open");
        var btnClass = "active fa" +(this.state.colapsed ? " fa-angle-down" : " fa-angle-up");

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
                    <div onClick={this.toggle}  className="title">
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
    
    render: function () {
        var items = [{ 
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
        }];
        var categories = [
            { title : 'Income', open : true},
            { title :'Expenditure', open : false},
            { title :'Savings', open : false}
        ];
        return  <div className="budget">
                    <div onClick={this.toggle} className="budget-container">
                    {categories.map(function(c){
                        return <Panel  title={c.title} items={items} />
                    })}
                    </div>
    			</div>
    }
});