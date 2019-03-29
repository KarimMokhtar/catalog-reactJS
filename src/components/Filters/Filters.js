import React ,{Component} from "react"
import PriceFilter from "./priceFilter"
import RatingFilter from "./ratingFilter"
export default class Filters extends Component{
    constructor(props){
        super();
        this.state={

        }
    }
    render(){
        return(
            <div className="filtersdiv">
                <PriceFilter />
                <RatingFilter changeRate = {this.props.changeRate}/>
            </div>
        )
    }
}