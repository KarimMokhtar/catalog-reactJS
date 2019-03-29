import React, { Component } from "react";
import SingleProduct from "./singleProduct"
export default class Products extends Component{
    constructor(props){
        super();
        this.state={
            products : [],
            categoryId : -1,
            rate:0,
        }
    }
    componentDidMount(){
        fetch(this.props.prodeuctsAPI)
            .then(res=> res.json())
            .then(res=> 
                this.setState({
                products : res,
                categoryId:this.props.currentCategory,
                rate:this.props.rate})
            )
    }
    componentDidUpdate(){
        if(this.state.categoryId !== this.props.currentCategory || this.state.rate != this.props.rate)
            fetch(this.props.prodeuctsAPI)
            .then(res=> res.json())
            .then(res=> 
                this.setState({
                products : res,
                categoryId:this.props.currentCategory,
                rate:this.props.rate,
                })
            )
    }
    render(){
        return <div className="container">
                <h3 className="h3">{this.props.categoryName}</h3>
                <div className="row">
                {this.state.products.map((prod,i)=> 
                    <div key={i} className="col-md-3 col-sm-6">
                        <SingleProduct key={i} product={prod}/>
                    </div>
                )}
            </div>
        </div>;
    }
}