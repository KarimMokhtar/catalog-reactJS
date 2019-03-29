import React, { Component } from "react";
import "./App.css";
import Catategory from "./components/category";
import Products from "./components/products/products"
import Filters from "./components/Filters/Filters"
class App extends Component {
    constructor(props){
        super();
        this.state={
            currentCategory : -1,
            currentCategoryName :"All Categories",
        }
        
    }
    callBack = (id,name) =>{
        this.setState({currentCategory:id,currentCategoryName:name})
    }
    render() {
        const categoryAPI = "http://test-api.edfa3ly.io/category", prodeuctsAPI="http://test-api.edfa3ly.io/product"
        return (
            <div className="App">
                <div style={{textAlign:"center"}}>
                    <h1>Our e-commerce store</h1>
                    <p>Choose one of our categories</p>
                </div>
                <Catategory choseCategory={this.callBack} categoryAPI={categoryAPI}/>
                <Filters />
                <Products categoryName = {this.state.currentCategoryName} prodeuctsAPI={this.state.currentCategory!==-1? prodeuctsAPI+"?categoryId="+this.state.currentCategory : prodeuctsAPI} currentCategory={this.state.currentCategory}/>
                
            </div>
        );
    }
}

export default App;
