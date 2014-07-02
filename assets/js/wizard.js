/** @jsx React.DOM */
var React = require('react')
, Tabs = require('./componets/Tabs');


module.exports = React.createClass({
    render: function () {
        var items = [
            { title : 'Take Home Pay' , className:"active fa fa-angle-down" },
            { title : 'Take Home Pay' , className:"active fa fa-angle-down"},
            { title : 'Take Home Pay' , className:" fa fa-angle-down"},
            { title : 'Take Home Pay' , className:"active fa fa-angle-down"},
            { title : 'Take Home Pay', className:"active fa fa-angle-down" },
            { title : 'Take Home Pay' , className:" fa fa-angle-down"},
            { title : 'Take Home Pay' , className:"active fa fa-angle-down"},
            { title : 'Take Home Pay' , className:"active fa fa-angle-down"},
            { title : 'Take Home Pay' , className:" fa fa-angle-down"},
            { title : 'Take Home Pay' , className:"active fa fa-angle-down"}
        ]
        var tabItems = [
            { title : 'Home', id : 2},
            { title : 'Transport', id : 3}
        ];
        return  <div className="wizard">
                     <div className="btn-breadcrumb">
                        <div href="#" className="income">
                            <h3>Income</h3>
                             <p>Lorem ipsume dolor</p>
                        </div>
                        <div href="#" className="expendioures">
                            <h3>Expenditure</h3>
                             <p>Lorem ipsume dolor</p>
                        </div>
                        <div href="#" className="savings">
                            <h3>Savings</h3>
                             <p>Lorem ipsume dolor</p>
                        </div>
                    </div>
                    <Tabs items={tabItems}/>
                    <div className="categories-set group">
                        {items.map(function(i){
                            return <div>
                                <h3>{i.title}</h3>
                                <p>Lorem ipsume dolor</p>
                                <a href="" className={i.className}>
                                </a>    
                            </div>
                        })}
                    </div>
                    <a className="wizard-next-btn btn btn-success"  >Next</a>
                </div>
    }
});