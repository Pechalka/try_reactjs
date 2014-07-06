/** @jsx React.DOM */
var React = require('react'),
 Tabs = require('./componets/Tabs');

var Modal = require('react-bootstrap').Modal;
var OverlayMixin = require('react-bootstrap').OverlayMixin;

var Row = React.createClass({
    handelClick : function(e){
        e.preventDefault()
        var title = e.target.dataset.title;
        this.props.onClick(title)
    } ,   
    render : function(){
        return  <tr data-title={this.props.data.title} onClick={this.handelClick}>
                <td data-title={this.props.data.title}>{this.props.data.title}</td>
                <td data-title={this.props.data.title}>{this.props.data.planing}</td>
                <td data-title={this.props.data.title}>{this.props.data.actual}</td>
            </tr>
    }
})





var Panel = React.createClass({
    mixins : [OverlayMixin],
     getInitialState: function () {
    return {
      isModalOpen: false,
      selected_category_title : ''
    };
  },

  handleToggle: function (title) {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
      selected_category_title : title
    });
  },

  // This is called by the `OverlayMixin` when this component
  // is mounted or updated and the return value is appended to the body.
  renderOverlay: function () {
    if (!this.state.isModalOpen) {
      return <span/>;
    }
    return (
        <Modal title={this.state.selected_category_title} animation={false} onRequestHide={this.handleToggle}>
          <div className="modal-body">
            <h2>Comming soon!</h2>
          </div>
        </Modal>
      );
  },
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
                 <table >
                        <thead>
                            <tr>
                                <th className="category">Category</th>
                                <th className="planing">Planing</th>
                                <th className="actual">Actual</th>
                            </tr>
                        </thead>
                        <tbody >
                            {this.props.items.map(function(i){
                                return <Row onClick={this.handleToggle}  data={i}/>
                            }.bind(this))}
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
                title : 'Take Home Pay 1', 
                planing : '$57', 
                actual : '$66,999' 
            },
            { 
                status : 'completed', 
                title : 'Take Home Pay 2 ', 
                planing : '$57', 
                actual : '$66,999' 
            },
            { 
                status : 'skip', 
                title : 'Take Home Pay 3', 
                planing : '$57', 
                actual : '$66,999' 
            }
        ];
        alert(1)
        return  <div className="budget">
                    <div className="budget-container">
                    {this.state.categories.map(function(c){
                        return <Panel selected={this.state.selected} onClick={this.handleClick} colapsed={!c.open} title={c.title} items={items} />
                    }.bind(this))}
                    </div>
    			</div>
    }
});