import React, { Component } from 'react';

export default class OrderComp extends Component {
    constructor(props) {
        super(props);

        this.src = props.src;
        this.txt = props.txt;
        this.ordered = props.ordered;
        this.opacity = "1";

        if (this.props.ordered[this.src]){
            this.opacity = "1";
        } else {
            this.opacity = "0.7";
        }

        this.updateStore = this.updateStore.bind(this);
        this.update = this.update.bind(this);
        
    }

    updateStore() {
        if (this.src !== "patty" && this.src !== "top-bun" && this.src !== "bottom-bun")
            this.props.ordered[this.src] = !this.props.ordered[this.src];
        
        if (this.props.ordered[this.src]){
            document.getElementById("comp." + this.src).style.opacity = "1";
        } else {
            document.getElementById("comp." + this.src).style.opacity = "0.7";
        }

    }

    update() {
        if (this.props.ordered[this.src]){
            document.getElementById("comp." + this.src).style.opacity = "1";
        } else {
            document.getElementById("comp." + this.src).style.opacity = "0.7";
        }
    }

    render() {
        return (
            <div onClick={this.updateStore} id={"comp." + this.src} style={{opacity:this.opacity}}>
                <img 
                    src={process.env.PUBLIC_URL + "./img/burger-comps/" + this.src + ".png"} 
                    alt="רכיב המבורגר" 
                    style={{width: "6rem", height:"1rem", marginRight:"5rem", position:"absolute", left:"20%"}}
                />
                <span className="comp" style={{height:"1rem", paddingLeft: "50%"}}>{this.txt}</span>
            </div>
        );
    }
}