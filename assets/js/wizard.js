/** @jsx React.DOM */
var React = require('react');

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
        return  <div>
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