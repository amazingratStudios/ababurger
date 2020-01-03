import React, { Component } from 'react';
import axios from 'axios';

export default class Authenticate extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            uname: "",
            pass: ""
        }

    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        var { uname, pass } = this.state;
        axios.post(
            "http://35.180.98.208:3030/authenticate",
            {
                uname,
                pass
            },
            { withCredentials: false }
        )
            .then(response => {
                if (response.data.logged) {
                    window.location.href = '/dashboard';
                }
                else {
                    console.log("wat", response.data);
                }
            })
            .catch(error => {
                console.log("registration error", error);
            });
        event.preventDefault();

    }

    render() {
        return (
            <div className="order">
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="uname"
                        placeholder="uname"
                        value={this.state.uname}
                        onChange={this.handleChange}
                        required
                    />
                    <br />
                    <input
                        type="password"
                        name="pass"
                        placeholder="pass"
                        value={this.state.pass}
                        onChange={this.handleChange}
                        required
                    />
                    <br />
                    <button type="submit">login</button>
                </form>
            </div>
        );
    }
}