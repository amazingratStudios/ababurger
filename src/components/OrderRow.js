import React, { Component } from 'react';

export default class UserRow extends Component {
    constructor(props) {
        super(props);

        this.stats = props.stat === 0 ? "red" : props.stat === 1 ? "yellow" : "green";
    }

    render() {
        return (
            <tr className={"userTr " + this.stats} id={this.props.id} key={this.props.id} 
                onClick={() => this.props.update(this.props.id)}>
                <td>{this.props.name}</td>
                <td>{this.props.content}</td>
            </tr>
        );
        
    }
}