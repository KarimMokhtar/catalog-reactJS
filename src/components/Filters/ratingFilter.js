import React, {Component} from "react";
export default class RatingFilter extends Component{
    constructor(props){
        super();
        this.state = {
            currentRating:0
        }
    }
    render(){
        return(
            <div className="product-grid">
                <h3 className="h3">Average rating</h3>
                <ul className="rating" style={{cursor:"pointer"}} onClick={()=>this.props.changeRate(5)}>
                    <li className="fa fa-star"></li>
                    <li className="fa fa-star"></li>
                    <li className="fa fa-star"></li>
                    <li className="fa fa-star"></li>
                    <li className="fa fa-star"></li>
                </ul>
                <ul className="rating" style={{cursor:"pointer"}} onClick={()=>this.props.changeRate(4)}>
                    <li className="fa fa-star"></li>
                    <li className="fa fa-star"></li>
                    <li className="fa fa-star"></li>
                    <li className="fa fa-star"></li>
                    <li className="fa fa-star disable"></li>
                </ul>
                <ul className="rating" style={{cursor:"pointer"}} onClick={()=>this.props.changeRate(3)}>
                    <li className="fa fa-star"></li>
                    <li className="fa fa-star"></li>
                    <li className="fa fa-star"></li>
                    <li className="fa fa-star disable"></li>
                    <li className="fa fa-star disable"></li>
                </ul>
                <ul className="rating" style={{cursor:"pointer"}} onClick={()=>this.props.changeRate(2)}>
                    <li className="fa fa-star"></li>
                    <li className="fa fa-star"></li>
                    <li className="fa fa-star disable"></li>
                    <li className="fa fa-star disable"></li>
                    <li className="fa fa-star disable"></li>
                </ul>
                <ul className="rating" style={{cursor:"pointer"}} onClick={()=>this.props.changeRate(1)}>
                    <li className="fa fa-star"></li>
                    <li className="fa fa-star disable"></li>
                    <li className="fa fa-star disable"></li>
                    <li className="fa fa-star disable"></li>
                    <li className="fa fa-star disable"></li>
                </ul>
            </div>
        );
    }
}