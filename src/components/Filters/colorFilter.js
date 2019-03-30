import React, { Component } from "react";
export default class ColorFilter extends Component {
    constructor(props) {
        super();
    }
    render() {
        return (
            <div className="product-grid">
                <h3 className="h3">Color Filter</h3>
                <div className="input-group input-group-sm mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-sm">
                            Color
                        </span>
                    </div>
                    <input type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" onChange={e => this.props.changeColor(e)} />
                </div>
            </div>
        );
    }
}
