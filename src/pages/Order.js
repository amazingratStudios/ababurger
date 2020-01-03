import React, { Component } from 'react';
import Burger from '../components/Burger';
import axios from 'axios';

export default class OrderComp extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateOrdered = this.updateOrdered.bind(this);

        this.state = {
            orderee: "",
            ordered: ""
        }

        this.order = {
            "top-bun": true,
            "mushrooms": false,
            "carmelized-onion": false,
            "egg": false,
            "cheese": false,
            "patty": true,
            "onion": true,
            "tomato": true,
            "lettuce": true,
            "bottom-bun": true
        };

    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    updateOrdered() {
        var extras = ["mushrooms", "carmelized-onion", "egg", "cheese"];
        var base = ["onion", "tomato", "lettuce"];
        var odds = "";
        for (let key in this.order) {
            if (extras.includes(key) && this.order[key]) {
                odds = odds + "with " + key + ", ";
            } else if (base.includes(key) && !this.order[key]) {
                odds = odds + "no " + key + ", ";
            }
        }
        odds = odds.replace("undefined", "");
        return(odds.substring(0, odds.length - 2));
    }

    handleSubmit(event) {
        var { orderee, ordered } = this.state;
        ordered = this.updateOrdered();
        axios.post(
            "http://35.180.98.208:3030/add_order",
            {
                orderee,
                ordered
            },
            { withCredentials: false }
        )
            .then(response => {
                if (response.data.added) {
                    console.log("OK")
                }
                else {
                    console.log("wat", response.data);
                }
            })
            .catch(error => {
                console.log("registration error", error);
            });
        event.preventDefault();
        window.location.href = "/";

    }

    render() {
        return (
            <div className="Order">
                <h1>בצע הזמנה</h1>
                <form onSubmit={this.handleSubmit}>
                    <h2>שם המזמין (באנגלית):</h2>
                    <input
                        type="text"
                        name="orderee"
                        placeholder="שם המזמין (באנגלית)"
                        value={this.state.orderee}
                        onChange={this.handleChange}
                        required
                    />
                    <br />
                    <h2>פרטי ההזמנה:</h2>
                    <Burger ordered={this.order}/>
                    <br />
                    <button type="submit">שלח הזמנה</button>
                </form>
            </div>
        );
    }
}