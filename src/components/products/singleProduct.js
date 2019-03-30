import React, { Component } from "react";
export default class SingleProduct extends Component {
    constructor(props) {
        super();
        this.state = {};
    }
    ratingDraw(n) {
        let arr = [];
        for (let i = 0; i < 5; ++i) {
            arr.push(<li key={i} className="fa fa-star disable" />);
        }
        for (let i = 0; i < n; ++i) {
            arr[i] = <li key={i} className="fa fa-star" />;
        }
        return arr;
    }
    render() {
        const product = this.props.product;
        return (
            <div className="product-grid">
                <div className="product-image">
                    <img className="img-fluid" src={product.image} alt={product.name} />
                </div>
                <ul className="rating">{this.ratingDraw(product.rating)}</ul>
                <div className="product-content">
                    <h3 className="title">{product.name}</h3>
                    <div className="price">
                        ${product.price}
                        <h4>
                            color <span style={{ color: product.color, background: product.color === "white" || product.color === "ivory" ? "black" : "" }}>{product.color}</span>
                        </h4>
                    </div>
                </div>
            </div>
        );
    }
}
