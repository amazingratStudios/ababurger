import React, { Component } from 'react';
import OrderTable from '../components/OrderTable';


export default class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.props = props;
    }
    render() {
        return (
            <div className="Order">
                <h1>הזמנות להכנה</h1>
                <OrderTable orders={[{}]}/>
            </div>
        );
    }
}