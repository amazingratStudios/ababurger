import React, { Component } from 'react';
import OrderRow from './OrderRow';
import axios from 'axios';

export default class OrderTable extends Component {
    constructor(props) {
        super(props);

        this.props = props;
        this.updateTable = this.updateTable.bind(this);
        this.update = this.update.bind(this);
        this.state = {
            orders:[{}]
        };
        this.updateTable();
    }

    updateTable() {
        axios.get(
            "http://35.180.98.208:3030/orders",
            { withCredentials: false }
        )
        .then(response => {
            if (response.status === 200) {
                this.setState({
                    orders:response.data
                });
            } else {
                this.setState({
                    orders:[{id:0, orderee:"NO", ordered:"way", stat:0}]
                });
            }
            console.log(this.state)
            this.forceUpdate();
            this.render();
        })
        .catch(error => {
            console.log("fetch error", error);
        });
    }

    update(id) {
        console.log(id)
        axios.post(
            "http://35.180.98.208:3030/change_stat",
            {
                id
            },
            { withCredentials: false }
        )
        .then(response => {
            if (response.status === 200) {
                const a = async () => await this.updateTable();
                a();
            } else {
                console.log("FAIL FAIL FAIL")
            }
        })
        .catch(error => {
            console.log("fetch error", error);
        });
    }
    
    render() {
        console.log("RENDER")
        return (
            <div className="manageUser" dir="ltr">
                <table>
                    <thead className="tableHeader">
                        <tr>
                            <td>Name</td>
                            <td>Order Content</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.orders.map(order => (
                            <OrderRow id={order.id} name={order.orderee} content={order.ordered} stat={order.stat}
                            key={order.id} update={this.update} />
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}
