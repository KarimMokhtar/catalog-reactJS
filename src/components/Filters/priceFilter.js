import React, { Component } from "react";
import InputRange from "react-input-range";
export default class PriceFilter extends Component {
    constructor(props) {
        super();
        this.state = {
            value: { min: 0, max: 10000 }
        };
    }
    changePrice(value) {
        this.setState({ value });
    }
    render() {
        return (
            <div className="product-grid">
                <h3 className="h3">Price Filter</h3>
                <form className="form">
                    <InputRange minValue={0} value={this.state.value} maxValue={10000} onChange={value => this.setState({ value })} />
                </form>
            </div>
        );
    }
}
