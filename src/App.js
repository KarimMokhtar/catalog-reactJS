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
            rate:0,
            color:-1,
        }
        
    }
    callBack = (id,name) =>{
        this.setState({currentCategory:id,currentCategoryName:name})
    }
    changeRate = rate =>{
        this.setState({rate})
    }
    changeColor = e =>{
        this.setState({color:e.target.value?e.target.value:-1})
    }
    renderProducts(){
        let prodeuctsAPI="http://test-api.edfa3ly.io/product?", anotherFilter = "";
        if(this.state.currentCategory !== -1){
            prodeuctsAPI += "categoryId="+this.state.currentCategory;
            anotherFilter = "&";
        }
        if(this.state.rate !== 0 ){
            prodeuctsAPI += anotherFilter+"rating="+this.state.rate;
        }
        if(this.state.color !== -1){
            prodeuctsAPI += anotherFilter+"color="+this.state.color;
        }
        return <Products categoryName = {this.state.currentCategoryName}
                     prodeuctsAPI = {prodeuctsAPI}
                     currentCategory={this.state.currentCategory}
                     rate={this.state.rate}
                     color={this.state.color}
                     />
    }
    render() {
        const categoryAPI = "http://test-api.edfa3ly.io/category"
        return (
            <div className="App">
                <div style={{textAlign:"center"}}>
                    <h1>Our e-commerce store</h1>
                    <p>Choose one of our categories</p>
                </div>
                <Catategory choseCategory={this.callBack} categoryAPI={categoryAPI}/>
                <div style={{display:"flex"}}>
                    <Filters changeRate = {this.changeRate} changeColor={this.changeColor}/>
                    {this.renderProducts()}
                </div>
            </div>  
        );
    }
}

export default App;
