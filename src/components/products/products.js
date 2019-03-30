import React, { Component } from "react";
import SingleProduct from "./singleProduct";
export default class Products extends Component {
    constructor(props) {
        super();
        this.state = {
            products: [],
            categoryId: -1,
            rate: 0,
            color: -1
        };
    }
    componentDidMount() {
        fetch(this.props.prodeuctsAPI)
            .then(res => res.json())
            .then(res =>
                this.setState({
                    products: res,
                    categoryId: this.props.currentCategory,
                    rate: this.props.rate,
                    color: this.props.color,
                    flag: res.length == 0 ? true : false
                })
            );
    }
    componentDidUpdate() {
        if (this.state.categoryId !== this.props.currentCategory || this.state.rate !== this.props.rate || this.state.color !== this.props.color)
            fetch(this.props.prodeuctsAPI)
                .then(res => res.json())
                .then(res =>
                    this.setState({
                        products: res,
                        categoryId: this.props.currentCategory,
                        rate: this.props.rate,
                        color: this.props.color,
                        flag: res.length == 0 ? true : false
                    })
                );
    }
    render() {
        return (
            <div className="container">
                <h3 className="h3">{this.props.categoryName}</h3>
                <div className="row">
                    {this.state.products.map((prod, i) => (
                        <div key={i} className="col-md-3 col-sm-6">
                            <SingleProduct key={i} product={prod} />
                        </div>
                    ))}
                    {this.state.flag && <p>Sorry there are no products for these filter</p>}
                </div>
            </div>
        );
    }
}
