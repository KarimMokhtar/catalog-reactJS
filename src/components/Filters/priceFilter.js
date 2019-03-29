import React, {Component} from "react";
import InputRange from 'react-input-range';
export default class PriceFilter extends Component{
    constructor(props){
        super();
        this.state = {
            value:{min:0,max:10000}
        }
    }
    changePrice(value){
        this.setState({value})
    }
    render(){
        return(
            <div></div>
        );
    }
}